const btnFlip = document.getElementById("btn-flip");
const btnReset = document.getElementById("btn-reset");
const colorText = document.getElementById("color");

function getRandomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, "0");
}

btnFlip.addEventListener("click", () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});

btnReset.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffffff";
  colorText.textContent = "#ffffff";
});
