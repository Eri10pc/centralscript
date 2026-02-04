import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js';

const firebaseConfig = {
    apiKey: "AIzaSyBxCCbHYMcU4dPgMWkhE73939ErOaA2Stc",
    authDomain: "controle-class-scripts.firebaseapp.com",
    databaseURL: "https://controle-class-scripts-default-rtdb.firebaseio.com",
    projectId: "controle-class-scripts",
    storageBucket: "controle-class-scripts.firebasestorage.app",
    messagingSenderId: "662596791017",
    appId: "1:662596791017:web:857fa68154bc2d17375e78",
    measurementId: "G-GBFJX7MDLZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

let countdownInterval;
let maintenanceEndTime;

function updateTimer() {
    const now = new Date().getTime();
    const distance = maintenanceEndTime - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        redirectToMainSite();
        return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function redirectToMainSite() {
    window.location.href = 'https://saladofuturohack.xyz/';
}

function startCountdown(endTime) {
    maintenanceEndTime = endTime;
    
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
}

const maintenanceRef = ref(database, 'maintenance');
onValue(maintenanceRef, (snapshot) => {
    const data = snapshot.val();
    
    if (data && data.enabled && data.endTime) {
        startCountdown(data.endTime);
    } else {
        redirectToMainSite();
    }
});

window.addEventListener('load', () => {
    const stars = document.getElementById('stars');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');
    
    if (stars) stars.style.animation = 'animStar 50s linear infinite';
    if (stars2) stars2.style.animation = 'animStar 100s linear infinite';
    if (stars3) stars3.style.animation = 'animStar 150s linear infinite';
});