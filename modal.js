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

       if (openLoginBtn && loginModal) {
        openLoginBtn.addEventListener("click", (e) => {
          e.preventDefault();
          loginModal.style.display = "block";
        });
      }

       if (openSignInBtn && signInModal) {
        openSignInBtn.addEventListener("click", (e) => {
          e.preventDefault();
          signInModal.style.display = "block";
        });
      }

      // Schließen mit X
      document.querySelectorAll(".modal .close").forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
          closeBtn.closest(".modal").style.display = "none";
        });
      });

      // Schließen bei Klick außerhalb
      window.addEventListener("click", (event) => {
        document.querySelectorAll(".modal").forEach((modal) => {
          if (
            modal.style.display === "block" &&
            event.target === modal
          ) {
            modal.style.display = "none";
          }
        });
      });
    })
    .catch((error) => {
      console.error("Modal konnte nicht geladen werden:", error);
    });
});
