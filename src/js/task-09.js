function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body")
const btn = document.querySelector("button")
const span = document.querySelector(".color")

const changeColor = e => {
  const colorBG = getRandomHexColor()
  body.style.background = `${colorBG}`
  span.textContent = `${colorBG}`
}

btn.addEventListener("click", changeColor )