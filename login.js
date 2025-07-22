function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Beispiel-Daten für Demo
    const validUsername = "Spartacus";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        alert("Login erfolgreich! Willkommen, " + username + "!");
        // Weiterleitung auf eine neue Seite (optional)
        // window.location.href = "dashboard.html";
    } else {
        alert("Login fehlgeschlagen! Benutzername oder Passwort falsch.");
    }
}
