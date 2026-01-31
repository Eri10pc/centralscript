// Neko cat animation code
const catCursor = document.getElementById('cat-cursor');
const nekoCanvas = document.getElementById('neko-canvas');
const ctx = nekoCanvas.getContext('2d');

let catX = window.innerWidth / 2;
let catY = window.innerHeight / 2;
const catSpeed = 2.5;
const catWidth = 32;
const catHeight = 32;

let targetX = catX;
let targetY = catY;
let currentSprite = 'sleep';
let animationFrame = 1;
let frameCount = 0;
const framesPerSpriteChange = 15;
const distanceThreshold = 5;

let mouseStopTimeout = null;
let isMouseMoving = false;
let canMove = true;
const mouseStopDelay = 2000;

const sprites = {};
const spriteNames = [
    'awake',
    'down1', 'down2', 'downleft1', 'downleft2', 'downright1', 'downright2',
    'up1', 'up2', 'upleft1', 'upleft2', 'upright1', 'upright2',
    'left1', 'left2', 'right1', 'right2',
    'scratch1', 'scratch2', 'wash1', 'wash2', 'yawn1', 'yawn2',
    'awake', 'sleep2'
];

function loadSprites() {
    let loadedCount = 0;
    let errorCount = 0;
    const uniqueSpriteNames = [...new Set(spriteNames.filter(name => !name.startsWith('fp_')))]; 
    
    uniqueSpriteNames.forEach(name => {
        const img = new Image();
        img.onload = () => {
            loadedCount++;
            if (loadedCount + errorCount === uniqueSpriteNames.length) {
                initializeNeko();
            }
        };
        img.onerror = () => {
            console.log(`Failed to load sprite: ${name}.png`);
            errorCount++;
            if (loadedCount + errorCount === uniqueSpriteNames.length) {
                if (loadedCount > 0) {
                    initializeNeko();
                }
            }
        };
        img.src = `${name}.png`; 
        sprites[name] = img;
    });
    
    setTimeout(() => {
        if (!catCursor.style.display || catCursor.style.display === 'none') {
            initializeNeko();
        }
    }, 5000);
}

function calculateDirection(dx, dy) {
    const r = Math.atan2(dy, dx);
    const a = (r / Math.PI * 180 + 360) % 360;

    switch (true) {
        case a <= 292.5 && a > 247.5: return 'up';
        case a <= 337.5 && a > 292.5: return 'upright';
        case a <= 22.5 || a > 337.5: return 'right';
        case a <= 67.5 && a > 22.5: return 'downright';
        case a <= 112.5 && a > 67.5: return 'down';
        case a <= 157.5 && a > 112.5: return 'downleft';
        case a <= 202.5 && a > 157.5: return 'left';
        case a <= 247.5 && a > 202.5: return 'upleft';
        default: return 'awake';
    }
}

function updateNekoPosition() {
    const dx = targetX - catX;
    const dy = targetY - catY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < distanceThreshold) {
        if (!isMouseMoving) {
            if (currentSprite.includes('sleep') || currentSprite === 'awake') {
                if (Math.random() < 0.003) {
                    const idleStates = ['sleep', 'scratch', 'wash', 'yawn'];
                    currentSprite = idleStates[Math.floor(Math.random() * idleStates.length)];
                }
            } else if (!currentSprite.includes('sleep') && 
                      !currentSprite.includes('scratch') && 
                      !currentSprite.includes('wash') && 
                      !currentSprite.includes('yawn')) {
                currentSprite = 'sleep';
            }
        }
        return;
    }

    const direction = calculateDirection(dx, dy);
    currentSprite = direction;
    
    const velocityX = (dx / distance) * catSpeed;
    const velocityY = (dy / distance) * catSpeed;

    catX += velocityX;
    catY += velocityY;
    
    catCursor.style.left = `${catX - catWidth / 2}px`;
    catCursor.style.top = `${catY - catHeight / 2}px`;
}

function drawNeko() {
    requestAnimationFrame(drawNeko);

    ctx.clearRect(0, 0, catWidth, catHeight);

    frameCount++;
    if (frameCount >= framesPerSpriteChange) {
        animationFrame = animationFrame === 1 ? 2 : 1;
        frameCount = 0;
    }

    let spriteKey = currentSprite;
    if (currentSprite === 'sleep') {
        // There is no 'sleep1.png', only 'sleep2.png'.
        // To prevent blinking, we will just use 'sleep2' and not try to animate it.
        spriteKey = 'sleep2';
    } else if (currentSprite !== 'awake') {
        // For other states, we animate between frame 1 and 2.
        spriteKey = currentSprite + animationFrame;
    } else {
        // Default to 'awake'
        spriteKey = 'awake';
    }
    
    const img = sprites[spriteKey] || sprites['awake']; 

    if (img && img.complete) {
        ctx.drawImage(img, 0, 0, catWidth, catHeight);
    } else {
        // Draw fallback placeholder if image not loaded
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(16, 16, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(12, 14, 2, 0, Math.PI * 2);
        ctx.arc(20, 14, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initializeNeko() {
    console.log('Initializing Neko');
    catCursor.style.display = 'block';

    catX = window.innerWidth / 2;
    catY = window.innerHeight / 2;
    catCursor.style.left = `${catX - catWidth / 2}px`;
    catCursor.style.top = `${catY - catHeight / 2}px`;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        isMouseMoving = true;
        
        if (mouseStopTimeout) {
            clearTimeout(mouseStopTimeout);
        }
        
        mouseStopTimeout = setTimeout(() => {
            isMouseMoving = false;
            currentSprite = 'sleep';
        }, mouseStopDelay);
    });
    
    setInterval(updateNekoPosition, 1000 / 60);
    drawNeko();
}

document.addEventListener('DOMContentLoaded', () => {
    loadSprites();
});