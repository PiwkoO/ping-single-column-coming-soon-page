const form = document.querySelector('.form');
const emailInput = document.querySelector('.form__email');
const formMessage = document.querySelector('.form__message');
const emailValidation = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g);

const EMPTY_EMAIL = 'Whoops! It looks like you forgot to add your email';
const INVALID_EMAIL = 'Please provide a valid email address';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailInput.value.trim() === '') {
        emailInput.classList.add('form__email--error');
        formMessage.textContent = EMPTY_EMAIL;
    } else if (!emailInput.value.match(emailValidation)) {
        emailInput.classList.add('form__email--error');
        formMessage.textContent = INVALID_EMAIL;
    } else {
        emailInput.classList.remove('form__email--error');
        emailInput.value = '';
    }
})