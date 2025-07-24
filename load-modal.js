
fetch("modul.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP-Fehler: " + response.status);
    }
    return response.text();
  })
  .then(html => {
    document.getElementById("modals").innerHTML = html;

    // Optional: Weitere Initialisierung hier starten, z. B. initModals();
  })
  .catch(error => {
    console.error("Fehler beim Laden von modul.html:", error);
  });
