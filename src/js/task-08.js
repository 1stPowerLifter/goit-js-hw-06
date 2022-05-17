const users = []

const submit = (e) => {
    e.preventDefault();
    const user = {}
    const {
    elements: { email, password }
    } = e.currentTarget;

    if (email.value === "" || password.value === "") {
       return alert("Порожня форма емейла чи паролю! Просимо Вас виправити дану помилку.")
    }

    user.email = email.value
    user.password = password.value

    console.log(user)

    e.currentTarget.reset()

    users.push(user)
}


const form = document.querySelector(".login-form")
form.addEventListener("submit", submit)
