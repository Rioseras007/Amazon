/**
 * audio.js — Background music + button click SFX
 * Used on all pages: index.html, toplibros.html, topvideojuegos.html
 */

(function () {
    // ── Background music ──────────────────────────────────────────────────────
    const bgMusic = new Audio('musica_de_fondo.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.4;

    // Remember mute preference across pages
    let isMuted = localStorage.getItem('musicMuted') === 'true';

    // Try to autoplay; browsers may block it until first interaction
    function tryPlay() {
        if (!isMuted) {
            bgMusic.play().catch(() => {
                // Will retry on first click anywhere
            });
        }
    }

    // ── Click sound effect ────────────────────────────────────────────────────
    // Generate a short, subtle "click" tone via Web Audio API — no extra file needed
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playClick() {
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.08);
        gainNode.gain.setValueAtTime(0.18, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.1);
    }

    // ── Music toggle button ───────────────────────────────────────────────────
    function createMusicButton() {
        const btn = document.createElement('button');
        btn.id = 'music-toggle-btn';
        btn.className = 'music-btn' + (isMuted ? ' muted' : '');
        btn.title = isMuted ? 'Activar música' : 'Silenciar música';
        btn.innerHTML = isMuted ? '🔇' : '🎵';
        btn.setAttribute('aria-label', 'Toggle background music');

        btn.addEventListener('click', function () {
            isMuted = !isMuted;
            localStorage.setItem('musicMuted', isMuted);
            if (isMuted) {
                bgMusic.pause();
                btn.innerHTML = '🔇';
                btn.title = 'Activar música';
                btn.classList.add('muted');
            } else {
                bgMusic.play();
                btn.innerHTML = '🎵';
                btn.title = 'Silenciar música';
                btn.classList.remove('muted');
            }
            playClick();
        });

        document.body.appendChild(btn);
    }

    // ── Attach click SFX to all buttons / links ───────────────────────────────
    function attachClickSounds() {
        document.querySelectorAll('a.buy-btn, nav.navbar a, .music-btn').forEach(function (el) {
            el.addEventListener('click', function () {
                if (audioCtx.state === 'suspended') audioCtx.resume();
                playClick();
            }, { once: false });
        });
    }

    // ── First user interaction handler ────────────────────────────────────────
    // Browsers block autoplay until user gestures; this unlocks it
    function onFirstInteraction() {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        tryPlay();
        document.removeEventListener('click', onFirstInteraction);
        document.removeEventListener('keydown', onFirstInteraction);
    }

    // ── Init ──────────────────────────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', function () {
        createMusicButton();
        attachClickSounds();
        tryPlay();
    });

    document.addEventListener('click', onFirstInteraction, { once: true });
    document.addEventListener('keydown', onFirstInteraction, { once: true });
})();
