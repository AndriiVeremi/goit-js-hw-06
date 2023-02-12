const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener("submit", (event) => {

    event.preventDefault();

    const dbLoginForm = {};

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert("ох тиж Лушпень, не всі поля заповнив!");
    } else {
        dbLoginForm.email = email.value
        dbLoginForm.password = password.value
    }
    event.currentTarget.reset();
    console.log(dbLoginForm)
});








