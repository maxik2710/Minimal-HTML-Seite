// Warte, bis das gesamte DOM geladen und geparst ist
document.addEventListener('DOMContentLoaded', () => {

    // Hol das Modal-Element
    const modal = document.getElementById('modal');

    // Hol den Button, der das Modal öffnet
    const openBtn = document.getElementById('openModalBtn');

    // Hol den Button, der das Modal schließt (im Modal selbst)
    const closeBtn = document.getElementById('closeModalBtn');

    // Füge Event Listener hinzu: beim Klick auf den Open-Button Modal anzeigen
    openBtn.addEventListener('click', () => {
        modal.style.display = 'block'; // Zeige das Modal
    });

    // Füge Event Listener hinzu: beim Klick auf den Close-Button Modal ausblenden
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // Verstecke das Modal
    });

    // Füge Event Listener hinzu: Modal schließen, wenn man außerhalb des Inhalts klickt
    window.addEventListener('click', (event) => {
        if (event.target === modal) { // Prüfe, ob der Klick auf den Modal-Overlay ging
            modal.style.display = 'none'; // Verstecke das Modal
        }
    });
});
