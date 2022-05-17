let counterValue = 0;
const value = document.querySelector('#value');

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');

decBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

incBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
})

