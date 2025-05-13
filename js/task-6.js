function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesDiv = document.getElementById("boxes");
const amountInput = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  let amount = amountInput.value;

  if (amount > 100 || amount < 1) {
    return;
  }

  boxesDiv.innerHTML = "";

  createBoxes(amount);
  amountInput.value = "";
});

destroyBtn.addEventListener("click", () => {
  boxesDiv.innerHTML = "";
});

function createBoxes(amount) {
  // ilk kutu genişliği
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${width}px`;
    newBox.style.height = `${height}px`;
    width = width + 10;
    height = height + 10;
    console.log(width);
    console.log(height);

    boxesDiv.appendChild(newBox);
  }
}
