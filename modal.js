// modal.js

// Lade die Modalstruktur
document.addEventListener("DOMContentLoaded", function () {
  fetch("modal.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("modals-container").innerHTML = html;

      // Eventlistener nach dem Einfügen binden
      const loginBtn = document.getElementById("openLogin");
      const signUpBtn = document.getElementById("openSignIn");

      const loginModal = document.getElementById("loginModal");
      const signInModal = document.getElementById("signInModal");

      loginBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.style.display = "block";
      });

      signUpBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        signInModal.style.display = "block";
      });

      document.querySelectorAll(".modal .close").forEach((btn) => {
        btn.addEventListener("click", function () {
          this.closest(".modal").style.display = "none";
        });
      });

      window.addEventListener("click", function (e) {
        document.querySelectorAll(".modal").forEach((modal) => {
          if (
            modal.style.display === "block" &&
            e.target === modal
          ) {
            modal.style.display = "none";
          }
        });
      });
    })
    .catch((err) => {
      console.error("Fehler beim Laden der modal.html:", err);
    });
});
