function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input')
const btnCreate = document.querySelector("button[data-create]")
const btnDestroy = document.querySelector("button[data-destroy]")
const divForBoxes = document.querySelector("#boxes")




const createBoxes = e => {
  if (input.value < 1 || input.value > 100) {
    alert("Число повинно бути в межах від 1 до 100")
  }

  let size = 30

  function box() {
  return `<div class = "box" 
  style="width: ${size}px; 
  height: ${size}px; 
  background: ${getRandomHexColor()}"></div>`
  }
  
  for (let i = 0; i < input.value ; i += 1) {
    divForBoxes.innerHTML += box()
    size +=10
  }
}

const destroyBoxes = e => {
  const allBoxes = document.querySelectorAll(".box")
  for (let i = 0; i < allBoxes.length; i += 1){
    const box = document.querySelector('.box')
    box.remove()
  }

}

btnCreate.addEventListener("click", createBoxes)
btnDestroy.addEventListener("click", destroyBoxes)