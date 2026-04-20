const API_URL = "https://rithm-jeopardy.herokuapp.com/api/";
const NUMBER_OF_CATEGORIES = 6;
const NUMBER_OF_CLUES_PER_CATEGORY = 5;

let categories = [];
let activeClue = null;
let activeClueMode = 0;
let isPlayButtonClickable = true;

let score = 0;
let answeredCount = 0;
let streak = 0;
let bestScore = Number(localStorage.getItem("brainArcadeBestScore") || 0);
let hintUsed = false;

$("#play").on("click", handleClickOfPlay);
$("#active-clue").on("click", handleClickOfActiveClue);
$("#check-answer").on("click", handleCheckAnswer);
$("#skip-btn").on("click", handleSkip);
$("#reveal-btn").on("click", handleReveal);
$("#hint-btn").on("click", handleHint);
$("#read-clue").on("click", speakActiveClue);
$("#clear-best").on("click", clearBestScore);
$(".tab-btn").on("click", handleTabChange);

updateStats();

function handleTabChange() {
  $(".tab-btn").removeClass("active");
  $(this).addClass("active");
  $(".tab-panel").removeClass("active");
  $(`#${$(this).data("tab")}`).addClass("active");
}

function updateStats() {
  $("#score-value").text(`$${score}`);
  $("#answered-value").text(answeredCount);
  $("#streak-value").text(streak);
  $("#best-value").text(`$${bestScore}`);
}

function clearBestScore() {
  bestScore = 0;
  localStorage.setItem("brainArcadeBestScore", "0");
  updateStats();
}

function setFeedback(message, type = "info") {
  $("#feedback")
    .removeClass("correct wrong info hint")
    .addClass(type)
    .text(message);
}

function normalizeAnswer(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/&[^;]+;/g, " ")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\b(the|a|an)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function renderActiveClueQuestion() {
  $("#active-clue").addClass("fade-in").html(`
      <div>
        <div class="label">Question</div>
        <div>${activeClue.question}</div>
      </div>
    `);
}

function renderActiveClueAnswer() {
  $("#active-clue").addClass("fade-in").html(`
      <div>
        <div class="label">Answer</div>
        <div>${activeClue.answer}</div>
      </div>
    `);
}

function renderEmptyState() {
  $("#active-clue").html(`
    <div class="empty-state">
      <span class="empty-icon">🎯</span>
      <p>Select a clue to begin.</p>
    </div>
  `);
}

function updateLearnPanel(text) {
  $("#learn-copy").text(text);
}

function speakActiveClue() {
  const text = $("#active-clue").text().trim();
  if (!text || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function handleClickOfPlay() {
  if (isPlayButtonClickable) {
    isPlayButtonClickable = false;
    setupTheGame();
  }
}

async function setupTheGame() {
  $("#spinner").removeClass("disabled");

  $("#categories").empty();
  $("#clues").empty();
  $("#play").text("Loading...");
  $("#answer-input").val("");
  setFeedback("");
  updateLearnPanel(
    "After you answer, this panel can guide the user with context, strategy, or a short explanation.",
  );
  renderEmptyState();

  categories = [];
  activeClue = null;
  activeClueMode = 0;
  score = 0;
  answeredCount = 0;
  streak = 0;
  hintUsed = false;
  updateStats();

  const categoryIds = await getCategoryIds();
  categories = await Promise.all(categoryIds.map(getCategoryData));
  fillTable(categories);

  $("#play").text("Game in Progress");
  $("#spinner").addClass("disabled");
}

async function getCategoryIds() {
  const response = await axios.get(`${API_URL}categories`, {
    params: { count: 100 },
  });

  const validCategories = response.data.filter(
    (cat) => cat.clues_count >= NUMBER_OF_CLUES_PER_CATEGORY,
  );

  return _.shuffle(validCategories)
    .slice(0, NUMBER_OF_CATEGORIES)
    .map((cat) => cat.id);
}

async function getCategoryData(categoryId) {
  const response = await axios.get(`${API_URL}category`, {
    params: { id: categoryId },
  });

  const data = response.data;

  const usableClues = _.shuffle(data.clues)
    .filter((clue) => clue.question && clue.answer)
    .slice(0, NUMBER_OF_CLUES_PER_CATEGORY)
    .map((clue, index) => ({
      id: clue.id,
      value: clue.value || (index + 1) * 200,
      question: clue.question,
      answer: clue.answer,
    }));

  return {
    id: categoryId,
    title: data.title,
    clues: usableClues,
  };
}

function fillTable(categories) {
  const $categoriesRow = $("#categories");
  const $cluesRow = $("#clues");

  categories.forEach((category) => {
    const $th = $("<th>").text(category.title.toUpperCase());
    $categoriesRow.append($th);

    const $td = $("<td>");

    category.clues.forEach((clue) => {
      const $clue = $("<div>")
        .addClass("clue")
        .attr("id", `${category.id}-${clue.id}`)
        .text(`$${clue.value}`)
        .on("click", handleClickOfClue);

      $td.append($clue);
    });

    $cluesRow.append($td);
  });
}

function handleClickOfClue(event) {
  if (activeClueMode !== 0) return;

  const $clicked = $(event.currentTarget);
  if ($clicked.hasClass("viewed")) return;

  const [categoryIdStr, clueIdStr] = $clicked.attr("id").split("-");
  const categoryId = Number(categoryIdStr);
  const clueId = Number(clueIdStr);

  const category = categories.find((cat) => cat.id === categoryId);
  if (!category) return;

  const clueIndex = category.clues.findIndex((clue) => clue.id === clueId);
  if (clueIndex === -1) return;

  activeClue = category.clues[clueIndex];
  category.clues.splice(clueIndex, 1);
  categories = categories.filter((cat) => cat.clues.length > 0);

  $clicked.addClass("viewed");
  activeClueMode = 1;
  hintUsed = false;

  $("#answer-input").val("").focus();
  setFeedback(
    "Question loaded. Type your answer or use the action buttons.",
    "info",
  );
  updateLearnPanel(
    "Try answering before revealing. Use the hint only if you need it.",
  );
  renderActiveClueQuestion();
}

function handleCheckAnswer() {
  if (activeClueMode !== 1 || !activeClue) return;

  const userAnswer = normalizeAnswer($("#answer-input").val());
  const correctAnswer = normalizeAnswer(activeClue.answer);

  if (!userAnswer) {
    setFeedback("Type an answer first.", "info");
    return;
  }

  const isCorrect =
    userAnswer === correctAnswer ||
    correctAnswer.includes(userAnswer) ||
    userAnswer.includes(correctAnswer);

  const clueValue = hintUsed
    ? Math.floor((activeClue.value || 0) / 2)
    : activeClue.value || 0;

  if (isCorrect) {
    score += clueValue;
    answeredCount += 1;
    streak += 1;
    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem("brainArcadeBestScore", String(bestScore));
    }
    updateStats();
    setFeedback(`Correct! +$${clueValue}`, "correct");
    $("#active-clue").addClass("correct-flash");
    updateLearnPanel(
      "Nice work. Click the clue panel to reveal the official answer and continue.",
    );
  } else {
    streak = 0;
    updateStats();
    setFeedback("Not quite. You can try hint, reveal, or skip.", "wrong");
    $("#answer-input").addClass("wrong-shake");
    setTimeout(() => $("#answer-input").removeClass("wrong-shake"), 450);
    updateLearnPanel(
      "Wrong answers are part of practice. Use the reveal button to learn the correct response.",
    );
  }
}

function handleHint() {
  if (activeClueMode !== 1 || !activeClue) return;

  if (hintUsed) {
    setFeedback("Hint already used for this clue.", "info");
    return;
  }

  hintUsed = true;

  const answer = String(activeClue.answer || "")
    .replace(/<[^>]*>/g, "")
    .trim();

  const partial = answer
    .split("")
    .map((char, idx) => {
      if (char === " ") return " ";
      if (idx === 0 || idx === answer.length - 1) return char;
      return "·";
    })
    .join("");

  setFeedback(`Hint: ${partial}`, "hint");
  updateLearnPanel(
    "Hint used. This clue is now worth 50% of its original value.",
  );
}

function handleSkip() {
  if (activeClueMode !== 1 || !activeClue) return;
  streak = 0;
  updateStats();
  setFeedback("Skipped. Click the clue panel to see the answer.", "info");
  updateLearnPanel(
    "Skipping keeps the game moving. Use reveal to learn before the next clue.",
  );
  activeClueMode = 2;
  renderActiveClueAnswer();
}

function handleReveal() {
  if (activeClueMode !== 1 || !activeClue) return;

  streak = 0;
  updateStats();
  setFeedback("Answer revealed.", "info");
  updateLearnPanel("Review the answer, then move on to the next clue.");

  activeClueMode = 2;
  renderActiveClueAnswer();
  unlockBoardAfterDelay(1600);
}

function handleClickOfActiveClue() {
  // no longer used as a required interaction step
}

function unlockBoardAfterDelay(delay = 1400) {
  setTimeout(() => {
    activeClueMode = 0;
    activeClue = null;
    hintUsed = false;
    $("#answer-input").val("");
    setFeedback("");
    renderEmptyState();

    if (categories.length === 0) {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#active-clue").html(`
        <div>
          <div class="label">Game Complete</div>
          <div>Final Score: $${score}</div>
        </div>
      `);
      updateLearnPanel(
        "You finished the Jeopardy board. Next step: explore the rest of BrainArcade.",
      );
    }
  }, delay);
}
