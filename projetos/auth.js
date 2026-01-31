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

// Listen for auth state changes
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in, show the main content.
        console.log("User is signed in:", user);
        document.getElementById('main-content').style.display = 'block';
    } else {
        // User is signed out, redirect to the login page.
        console.log("User is signed out, redirecting to login.html");
        window.location.href = 'login.html';
    }
});
