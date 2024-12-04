const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
const signinForm = document.getElementById("connexionForm");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    let dataForm = new FormData(signinForm);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("mdp")
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiURL + "login", requestOptions)
    .then((response) => {

        if (response.ok) {
            return response.json();
        }
        else {
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
    })
    .then((result) => {
        const token = result.apiToken;
        setToken(token);

        // Placer ce token en cookie
        setCookie(roleCookieName, result.roles[0], 7);

        window.location.replace("/");
        console.log(result);
    })
    .catch((error) => console.error(error));
}