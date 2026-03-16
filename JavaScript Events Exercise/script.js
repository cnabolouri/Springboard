document.addEventListener("DOMContentLoaded", () => {
  /*  Get DOM elements */

  const boxContainer = document.getElementById("box-container");
  const newBoxButton = document.getElementById("new-box-button");
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");

  /*  Variables */

  let boxColor = "#000000";
  let boxIdCounter = 1;

  /*  Change color for all boxes */

  colorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    boxColor = colorInput.value;

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
      box.style.backgroundColor = boxColor;
    });

    colorInput.value = "";
  });

  /*  Function to create a new box */

  function addBox() {
    const box = document.createElement("div");

    box.classList.add("box");

    box.dataset.id = boxIdCounter;

    box.innerText = boxIdCounter;

    box.style.backgroundColor = boxColor;

    boxContainer.appendChild(box);

    boxIdCounter++;
  }

  /*  Button click → create box */

  newBoxButton.addEventListener("click", addBox);

  /*  Double click → remove box */

  document.addEventListener("dblclick", (event) => {
    if (event.target.classList.contains("box")) {
      event.target.remove();
    }
  });

  /*  Mouse over → show coordinates */

  document.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("box")) {
      const x = event.pageX;
      const y = event.pageY;

      event.target.innerText = `(${x}, ${y})`;
    }
  });

  /*  Mouse out → restore ID */

  document.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("box")) {
      event.target.innerText = event.target.dataset.id;
    }
  });

  /*  Press N key → create box */

  document.addEventListener("keydown", (event) => {
    if (event.target === colorInput) return;

    if (event.key === "n" || event.key === "N") {
      addBox();
    }
  });
});
