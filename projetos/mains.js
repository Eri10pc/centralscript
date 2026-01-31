// ============================================
// PREVENT CONSOLE CLEARING
// ============================================

// Bloqueia qualquer tentativa de limpar o console
(function() {
    const originalClear = console.clear;
    console.clear = function() {
        console.warn('⚠️ Tentativa de limpar console bloqueada!');
        // Não faz nada - impede a limpeza
    };
})();

console.log('🚀 Script iniciado! (versão anti-clear)');

// ============================================
// FIREBASE CONFIGURATION
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyBxCCAZaGrErOaA2Stc57fa68154bMWkhE73939",
    authDomain: "class-scripts.firebaseapp.com",
    databaseURL: "https://class-scripts-default-rtdb.firebaseio.com",
    projectId: "class-scripts",
    storageBucket: "class-scripts.appspot.com",
    messagingSenderId: "66259679117",
    appId: "1:66259679117:web:8c2d17375e7"
};

console.log('🔧 Inicializando Firebase...');

try {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
    console.log('✅ Firebase inicializado com sucesso!');
    window.db = db; // Torna global para debug
} catch (error) {
    console.error('❌ ERRO ao inicializar Firebase:', error);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function linkify(text) {
    const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// ============================================
// SETUP PRESENCE SYSTEM
// ============================================

function setupPresenceSystem() {
    console.log('👥 Configurando sistema de presença...');
    
    if (!window.db) {
        console.error('❌ Database não inicializado!');
        return;
    }
    
    try {
        const usersRef = window.db.ref('onlineUsers');
        const userRef = usersRef.push();
        
        userRef.onDisconnect().remove();
        userRef.set(true);
        
        usersRef.on('value', snapshot => {
            const count = snapshot.numChildren();
            const element = document.getElementById('online-users');
            if (element) {
                element.textContent = count;
                console.log(`👥 Usuários online: ${count}`);
            }
        });
        
        console.log('✅ Sistema de presença ativo!');
    } catch (error) {
        console.error('❌ Erro no sistema de presença:', error);
    }
}

// ============================================
// COPY TO CLIPBOARD
// ============================================

function showCopyNotification() {
    console.log('📋 Mostrando notificação de cópia');
    
    const existingNotification = document.getElementById('copy-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.id = 'copy-notification';
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 16px;
        background: linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(139, 92, 246, 0.9));
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 16px 24px;
        z-index: 99999;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        color: #fff;
        font-size: 14px;
        animation: slideIn 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="font-weight: 700; font-size: 16px; margin-bottom: 4px;">✅ Script Copiado!</div>
        <div style="opacity: 0.9;">Cole no console (F12) e pressione Enter</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function copyToClipboard(text) {
    console.log('📋 Tentando copiar:', text.substring(0, 50) + '...');
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('✅ Copiado com sucesso via Clipboard API!');
                showCopyNotification();
            })
            .catch(err => {
                console.log('⚠️ Clipboard API falhou, usando fallback:', err);
                fallbackCopy(text);
            });
    } else {
        console.log('⚠️ Clipboard API não disponível, usando fallback');
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.top = '-9999px';
    
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        const success = document.execCommand('copy');
        if (success) {
            console.log('✅ Copiado com sucesso via execCommand!');
            showCopyNotification();
        } else {
            console.error('❌ execCommand falhou');
            alert('Não foi possível copiar automaticamente. Copie manualmente:\n\n' + text.substring(0, 100) + '...');
        }
    } catch (err) {
        console.error('❌ Erro ao copiar:', err);
        alert('Erro ao copiar. Copie manualmente:\n\n' + text.substring(0, 100) + '...');
    }
    
    document.body.removeChild(textarea);
}

// ============================================
// LOAD SCRIPTS FROM FIREBASE
// ============================================

function loadAllScripts() {
    console.log('📦 Iniciando carregamento de scripts...');
    const scriptsGrid = document.getElementById('scripts-grid');
    
    if (!scriptsGrid) {
        console.error('❌ Elemento #scripts-grid não encontrado no HTML!');
        return;
    }
    
    console.log('✅ Elemento scripts-grid encontrado');
    scriptsGrid.innerHTML = '<div style="color: #fff; text-align: center; padding: 40px;">⏳ Carregando scripts do Firebase...</div>';
    
    if (!window.db) {
        console.error('❌ Firebase database não está disponível!');
        scriptsGrid.innerHTML = '<div style="color: #f00; text-align: center; padding: 40px;">❌ Erro: Firebase não inicializado</div>';
        return;
    }
    
    let totalScripts = 0;
    
    console.log('📡 Buscando dados do Firebase...');
    
    const khanRef = window.db.ref('khanScript').once('value');
    const discordRef = window.db.ref('discord').once('value');
    
    Promise.all([khanRef, discordRef])
        .then(([khanSnapshot, discordSnapshot]) => {
            console.log('📊 Dados recebidos do Firebase!');
            scriptsGrid.innerHTML = '';
            
            // Khan Academy Script
            const khanData = khanSnapshot.val();
            console.log('Khan Data:', khanData);
            
            if (khanData) {
                const isActive = khanData.status === 'ATIVO';
                console.log(`📚 Khan Academy: ${isActive ? 'ATIVO' : 'INATIVO'}`);
                
                const card = document.createElement('div');
                card.className = 'script-card';
                card.style.cssText = `
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3));
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 16px;
                    padding: 24px;
                    margin-bottom: 16px;
                `;
                
                card.innerHTML = `
                    <h3 style="color: #fff; margin-bottom: 8px;">${khanData.title || 'Khan Academy'}</h3>
                    <p style="color: #aaa; margin-bottom: 12px;">${khanData.description || 'Script automático'}</p>
                    <div style="margin: 12px 0;">
                        <span style="color: ${isActive ? '#00ff00' : '#ff0000'}; font-size: 12px;">
                            ● ${isActive ? 'Ativo' : 'Offline'}
                        </span>
                    </div>
                    <button class="khan-copy-btn" ${!isActive ? 'disabled' : ''} style="
                        width: 100%;
                        padding: 12px 20px;
                        background: ${isActive ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : '#444'};
                        color: white;
                        border: none;
                        border-radius: 8px;
                        cursor: ${isActive ? 'pointer' : 'not-allowed'};
                        font-size: 14px;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    ">
                        ${isActive ? '📋 Copiar Script' : '⚠️ Indisponível'}
                    </button>
                `;
                
                if (isActive) {
                    const btn = card.querySelector('.khan-copy-btn');
                    btn.addEventListener('mouseover', () => {
                        btn.style.transform = 'scale(1.05)';
                    });
                    btn.addEventListener('mouseout', () => {
                        btn.style.transform = 'scale(1)';
                    });
                    btn.onclick = () => {
                        console.log('🖱️ Botão Khan clicado!');
                        copyToClipboard(khanData.code || '');
                    };
                }
                
                scriptsGrid.appendChild(card);
                totalScripts++;
                console.log('✅ Card Khan Academy adicionado');
            } else {
                console.log('⚠️ Nenhum dado do Khan Academy encontrado');
            }
            
            // Discord Scripts
            const discordData = discordSnapshot.val();
            console.log('Discord Data:', discordData);
            
            if (discordData) {
                const keys = Object.keys(discordData);
                console.log(`📱 ${keys.length} scripts Discord encontrados`);
                
                keys.forEach((key, index) => {
                    const item = discordData[key];
                    const isActive = item.status === 'ATIVO';
                    
                    console.log(`  - Script ${index + 1}: ${item.title || key} (${isActive ? 'ATIVO' : 'INATIVO'})`);
                    
                    const card = document.createElement('div');
                    card.className = 'script-card';
                    card.style.cssText = `
                        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.3));
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 16px;
                        padding: 24px;
                        margin-bottom: 16px;
                    `;
                    
                    card.innerHTML = `
                        <h3 style="color: #fff; margin-bottom: 8px;">${item.title || 'Discord Script'}</h3>
                        <p style="color: #aaa; margin-bottom: 12px;">${item.description || ''}</p>
                        <div style="margin: 12px 0;">
                            <span style="color: ${isActive ? '#00ff00' : '#ff0000'}; font-size: 12px;">
                                ● ${isActive ? 'Ativo' : 'Offline'}
                            </span>
                        </div>
                        <a href="${isActive ? item.url : '#'}" 
                           ${isActive ? 'target="_blank"' : ''} 
                           style="
                                display: block;
                                width: 100%;
                                padding: 12px 20px;
                                background: ${isActive ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : '#444'};
                                color: white;
                                text-decoration: none;
                                border-radius: 8px;
                                text-align: center;
                                font-size: 14px;
                                font-weight: 600;
                                cursor: ${isActive ? 'pointer' : 'not-allowed'};
                                pointer-events: ${isActive ? 'auto' : 'none'};
                                transition: all 0.3s ease;
                           ">
                            ${isActive ? '🔗 Acessar Script' : '⚠️ Indisponível'}
                        </a>
                    `;
                    
                    scriptsGrid.appendChild(card);
                    totalScripts++;
                });
                
                console.log(`✅ ${keys.length} cards Discord adicionados`);
            } else {
                console.log('⚠️ Nenhum script Discord encontrado');
            }
            
            console.log(`🎉 TOTAL: ${totalScripts} scripts carregados com sucesso!`);
            
            if (totalScripts === 0) {
                scriptsGrid.innerHTML = `
                    <div style="
                        background: rgba(255, 107, 107, 0.1);
                        border: 1px solid rgba(255, 107, 107, 0.3);
                        border-radius: 12px;
                        padding: 40px;
                        text-align: center;
                        color: #ff6b6b;
                    ">
                        <div style="font-size: 48px; margin-bottom: 16px;">⚠️</div>
                        <h3 style="margin-bottom: 8px;">Nenhum script disponível</h3>
                        <p style="color: #aaa;">Tente recarregar a página ou contate o administrador</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error('❌ ERRO ao carregar scripts do Firebase:', error);
            console.error('Stack trace:', error.stack);
            
            scriptsGrid.innerHTML = `
                <div style="
                    background: rgba(255, 0, 0, 0.1);
                    border: 1px solid rgba(255, 0, 0, 0.3);
                    border-radius: 12px;
                    padding: 40px;
                    text-align: center;
                    color: #f00;
                ">
                    <div style="font-size: 48px; margin-bottom: 16px;">❌</div>
                    <h3 style="margin-bottom: 8px;">Erro ao carregar scripts</h3>
                    <p style="color: #aaa;">Erro: ${error.message}</p>
                    <button onclick="location.reload()" style="
                        margin-top: 16px;
                        padding: 12px 24px;
                        background: #6366f1;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                    ">🔄 Recarregar Página</button>
                </div>
            `;
        });
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function startCountdown() {
    console.log('⏰ Iniciando countdown...');
    
    const targetDate = new Date('2026-07-06T00:00:00').getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            const timer = document.getElementById('countdown-timer');
            if (timer) timer.innerHTML = '<div style="font-size: 48px;">🎉 Férias!</div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    console.log('✅ Countdown iniciado!');
}

// ============================================
// TYPEWRITER ANIMATION
// ============================================

function typewriter() {
    const element = document.getElementById('typing-title');
    if (!element) {
        console.log('⚠️ Elemento #typing-title não encontrado');
        return;
    }
    
    console.log('⌨️ Iniciando animação typewriter...');
    
    const text = 'Bem vindo a Class Scripts';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(type, 100);
        }
    }
    
    type();
}

// ============================================
// DOM CONTENT LOADED
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 ========================================');
    console.log('🎯 DOM CARREGADO - Iniciando aplicação...');
    console.log('🎯 ========================================');
    
    // Hide preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        console.log('🔄 Preloader encontrado, ocultando em 1 segundo...');
        setTimeout(() => {
            preloader.style.display = 'none';
            console.log('✅ Preloader ocultado!');
        }, 1000);
    } else {
        console.log('⚠️ Preloader não encontrado no HTML');
    }
    
    // Initialize all functions
    console.log('🔧 Inicializando funções principais...');
    
    try {
        typewriter();
        console.log('✅ Typewriter inicializado');
    } catch (e) {
        console.error('❌ Erro no typewriter:', e);
    }
    
    try {
        startCountdown();
        console.log('✅ Countdown inicializado');
    } catch (e) {
        console.error('❌ Erro no countdown:', e);
    }
    
    try {
        setupPresenceSystem();
        console.log('✅ Sistema de presença inicializado');
    } catch (e) {
        console.error('❌ Erro no sistema de presença:', e);
    }
    
    try {
        loadAllScripts();
        console.log('✅ Carregamento de scripts iniciado');
    } catch (e) {
        console.error('❌ Erro ao carregar scripts:', e);
    }
    
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        console.log('📱 Menu mobile encontrado, configurando...');
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            console.log('📱 Menu mobile toggled');
        });
        
        document.querySelectorAll('.mobile-menu li').forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
        
        console.log('✅ Menu mobile configurado');
    } else {
        console.log('⚠️ Menu mobile não encontrado');
    }
    
    console.log('🎉 ========================================');
    console.log('🎉 INICIALIZAÇÃO COMPLETA!');
    console.log('🎉 ========================================');
});

// Log final
console.log('📝 Script main-fixed.js carregado completamente!');

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);