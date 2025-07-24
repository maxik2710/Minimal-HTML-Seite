
document.addEventListener("DOMContentLoaded", function () {
    fetch("modul.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("modals").innerHTML = html;
        })
        .catch(error => {
            console.error("Fehler beim Laden von modul.html:", error);
        });
});
