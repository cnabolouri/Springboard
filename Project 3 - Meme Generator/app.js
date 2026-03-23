const memeForm = document.getElementById("meme-form");
const imageUrlInput = document.getElementById("image-url");
const topTextInput = document.getElementById("top-text");
const bottomTextInput = document.getElementById("bottom-text");
const memeGallery = document.getElementById("meme-gallery");
const themeToggle = document.getElementById("theme-toggle");
const clearAllBtn = document.getElementById("clear-all-btn");
const memeCount = document.getElementById("meme-count");
const emptyState = document.getElementById("empty-state");

/* =========================
   Theme toggle with localStorage
========================= */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.innerText = "☀️ Light Mode";
} else {
  themeToggle.innerText = "🌙 Dark Mode";
}

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.innerText = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.innerText = "🌙 Dark Mode";
  }
});

/* =========================
   Gallery UI helpers
========================= */
function updateGalleryState() {
  const memeCards = document.querySelectorAll(".meme-card");
  const count = memeCards.length;

  memeCount.innerText = `${count} meme${count === 1 ? "" : "s"}`;
  emptyState.style.display = count === 0 ? "block" : "none";
  clearAllBtn.style.display = count === 0 ? "none" : "inline-block";
}

updateGalleryState();

/* =========================
   Meme generation
========================= */
memeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!memeForm.checkValidity()) {
    memeForm.reportValidity();
    return;
  }

  const imageUrl = imageUrlInput.value.trim();
  const topText = topTextInput.value.trim();
  const bottomText = bottomTextInput.value.trim();

  const memeCard = document.createElement("div");
  memeCard.classList.add("meme-card");

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("meme-image-wrapper");

  const memeImage = document.createElement("img");
  memeImage.src = imageUrl;
  memeImage.alt = "Generated meme image";
  memeImage.loading = "lazy";

  const topCaption = document.createElement("div");
  topCaption.classList.add("meme-text", "top");
  topCaption.innerText = topText;

  const bottomCaption = document.createElement("div");
  bottomCaption.classList.add("meme-text", "bottom");
  bottomCaption.innerText = bottomText;

  /* Hover overlay */
  const hoverOverlay = document.createElement("div");
  hoverOverlay.classList.add("meme-overlay");

  const deleteIcon = document.createElement("button");
  deleteIcon.classList.add("delete-icon");
  deleteIcon.type = "button";
  deleteIcon.setAttribute("aria-label", "Delete meme");
  deleteIcon.innerHTML = "&times;";

  deleteIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    memeCard.remove();
    updateGalleryState();
  });

  hoverOverlay.appendChild(deleteIcon);

  memeImage.addEventListener("error", function () {
    imageWrapper.innerHTML =
      '<div class="error-text">Image failed to load. Please use a valid image URL.</div>';
  });

  imageWrapper.appendChild(memeImage);
  imageWrapper.appendChild(topCaption);
  imageWrapper.appendChild(bottomCaption);
  imageWrapper.appendChild(hoverOverlay);

  memeCard.appendChild(imageWrapper);
  memeGallery.appendChild(memeCard);

  memeForm.reset();
  updateGalleryState();
});

/* =========================
   Clear all memes
========================= */
clearAllBtn.addEventListener("click", function () {
  memeGallery.innerHTML = "";
  updateGalleryState();
});
