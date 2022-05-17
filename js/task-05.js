const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector('#name-output')

const changeOutput = (e) => {
    nameOutput.textContent =
        e.currentTarget.value === "" ?
        "Anonymous" : nameOutput.textContent = e.currentTarget.value;
}

nameInput.addEventListener("input", changeOutput);
