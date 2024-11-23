const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici il faudra appeler l'API pour vérifier les credentials en BDD

    if (mailInput.value == "mail@test.com" && passwordInput.value == "12345") {

        // Il faudra récupérer le vrai token
        const token = "sqjefzoefnzefjznzefzefaopapzodjaeapzdjazd"
        setToken(token);

        // Placer ce token en cookie
        setCookie("role", "admin", 7);

        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}