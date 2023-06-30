const form = document.getElementById("email-form");
const email = document.getElementById("input-email");
const regex = new RegExp("^(.+)@(.+)$");
const userEmail = document.getElementById("user-email");

if (form != null) {
    form.addEventListener('submit', e => {

        if (!regex.test(email.value.trim())) {
            e.preventDefault();
            form.classList.add("error");
        } else {
            localStorage.setItem("email", email.value.trim());
        }
    });
}

function addUserEmail() {
    userEmail.innerHTML = localStorage.getItem("email");
    localStorage.removeItem("email");
}