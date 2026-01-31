document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    // F12
    if (e.keyCode == 123) {
        return false;
    }
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // Ctrl+U
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

setInterval(function () {
    debugger;
}, 50);

// It's recommended to move this to a separate, secure configuration file
const firebaseConfig = {
    apiKey: atob("QUl6YVN5QnhDQ2JIWU1jVTRkUGdNV2toRTczOTM5RXJPYUEyU3Rj"),
    authDomain: "controle-class-scripts.firebaseapp.com",
    databaseURL: "https://controle-class-scripts-default-rtdb.firebaseio.com",
    projectId: "controle-class-scripts",
    storageBucket: "controle-class-scripts.firebasestorage.app",
    messagingSenderId: "662596791017",
    appId: "1:662596791017:web:857fa68154bc2d17375e78"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// DOM Elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');

const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');
const signupPasswordConfirmInput = document.getElementById('signup-password-confirm');
const signupButton = document.getElementById('signup-button');

// Function to toggle between login and signup forms
function toggleForms() {
    loginForm.classList.toggle('hidden');
    signupForm.classList.toggle('hidden');
}

// --- Authentication Logic ---

// Listen for auth state changes
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in, redirect to the main application.
        console.log("User is signed in, redirecting to index.html");
        window.location.href = 'index.html';
    } else {
        // User is signed out.
        // The user is on the login page, so no action is needed.
        console.log("User is signed out.");
    }
});

// Login button event
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            console.log("Login successful");
        })
        .catch((error) => {
            alert("Erro no login: " + error.message);
        });
});

// Signup button event
signupButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;
    const confirmPassword = signupPasswordConfirmInput.value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            console.log("Signup successful");
        })
        .catch((error) => {
            alert("Erro no cadastro: " + error.message);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    // Attach the toggleForms function to the toggle links
    const toggleLinks = document.querySelectorAll('.toggle-link');
    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForms();
        });
    });
});