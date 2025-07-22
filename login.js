// Get Elements
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

// Open Modal on Button Click
loginBtn.onclick = function() {
  modal.style.display = "block";
}

// Close Modal on Close Button Click
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Close Modal on Click Outside Modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
