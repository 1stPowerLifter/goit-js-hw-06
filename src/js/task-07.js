const range = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

text.style.fontSize = `${range.value}px`

const fontChange = (e) => {
    text.style.fontSize = `${range.value}px`
    console.log(range.value)
}

range.addEventListener("input", fontChange)