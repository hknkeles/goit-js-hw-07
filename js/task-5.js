function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = body.querySelector(".change-color");
const spanColor = body.querySelector(".color");
changeColorBtn.addEventListener("click", ()=>{
    let color = getRandomHexColor();
    spanColor.textContent = color;
    body.style.backgroundColor = color;

})


