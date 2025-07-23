document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementById('closeModalBtn');
    const infoButtons = document.querySelectorAll('.info-btn');

// ===== Login Modal =====
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeLoginBtn = document.getElementById('closeLoginModalBtn');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Handle Login Submit
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login erfolgreich mit: ' + loginForm.email.value);
    loginModal.style.display = 'none';
});

// ===== Sign-Up Modal =====
const signUpModal = document.getElementById('signUpModal');
const signUpBtn = document.getElementById('signUpBtn');
const closeSignUpBtn = document.getElementById('closeSignUpModalBtn');

signUpBtn.addEventListener('click', () => {
    signUpModal.style.display = 'block';
});

closeSignUpBtn.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === signUpModal) {
        signUpModal.style.display = 'none';
    }
});

// Handle Sign-Up Submit
const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registrierung erfolgreich für: ' + signUpForm.name.value);
    signUpModal.style.display = 'none';
});


    
    // Inhalte für jedes Thema
    const modalContent = {
        career: {
            title: 'Career Orientation',
            text: 'Platzhalter-Text für Career orientation. Hier können Infos über Karriereberatung stehen.'
        },
        cv: {
            title: 'CV and Cover Letter Support',
            text: 'Platzhalter-Text für CV und Bewerbungsunterlagen. Hier können Details stehen.'
        },
        tools: {
            title: 'Digital Tools and AI Basics',
            text: 'Platzhalter-Text für Digital Tools und AI Basics. Inhalte über digitale Hilfe.'
        },
        mentoring: {
            title: '1:1 Mentoring',
            text: 'Platzhalter-Text für Mentoring. Infos über persönliche Unterstützung.'
        }
    };

    // Event Listener für alle Info-Buttons
    infoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.info; // Hole den Wert aus data-info
            modalTitle.textContent = modalContent[key].title; // Setze Titel
            modalText.textContent = modalContent[key].text; // Setze Text
            modal.style.display = 'block'; // Zeige Modal
        });
    });

    // Modal schließen bei Klick auf ×
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Modal schließen bei Klick außerhalb
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
