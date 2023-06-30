const form = document.getElementById("email-form");
const email = document.getElementById("input-email");
const regex = new RegExp("^(.+)@(.+)$");

form.addEventListener('submit', e => {

    console.log(regex.test(email.value.trim()));

    if (!regex.test(email.value.trim())) {
        e.preventDefault();
        form.classList.add("error");
    }
});