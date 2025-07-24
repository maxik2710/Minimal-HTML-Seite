// modal.js

// Lade die Modal-HTML-Datei dynamisch
fetch('modal.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('modals-container').innerHTML = html;

    // Eventlistener für das Öffnen der Modals
    document.getElementById('openLogin')?.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('loginModal').style.display = 'block';
    });

    document.getElementById('openSignIn')?.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('signInModal').style.display = 'block';
    });

    // Eventlistener für das Schließen per "X"
    document.querySelectorAll('.modal .close').forEach(button => {
      button.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
      });
    });

    // Modal schließen beim Klick außerhalb
    window.addEventListener('click', function (event) {
      document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  })
  .catch(error => {
    console.error('Fehler beim Laden von modal.html:', error);
  });
