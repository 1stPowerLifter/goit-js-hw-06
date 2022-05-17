const inputText = document.querySelector("#validation-input")

const isValid = (e) => {
    const inputLength = inputText.value.length
    const dataLength = inputText.dataset.length
    
    if (Number(inputLength) === Number(dataLength) ) {
        inputText.classList.add("valid")
        inputText.classList.remove("invalid")
    } else {
        inputText.classList.add("invalid")
    }
}

inputText.addEventListener("change", isValid)