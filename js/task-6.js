function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; // Mevcut kutuları temizler

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", function () {
  const amount = parseInt(document.querySelector("#controls input").value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    document.querySelector("#controls input").value = "";
  }
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
