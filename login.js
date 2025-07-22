// Elemente holen
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

// Login-Modal öffnen
loginBtn.onclick = function() {
  modal.style.display = "block";
}

// Login-Modal schließen (über ×)
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Login-Modal schließen (Klick außerhalb)
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
