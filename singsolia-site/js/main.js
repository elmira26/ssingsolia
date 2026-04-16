// Singsolia - Main JavaScript
// Video controls, accordion, scroll navigation

(function() {
    'use strict';

    // ========== VIDEO CONTROLS ==========
    const video = document.getElementById('heroVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const playIcon = document.querySelector('.icon-play');
    const pauseIcon = document.querySelector('.icon-pause');
    const muteIcon = document.querySelector('.icon-mute');

    // Auto-play video on load (muted)
    window.addEventListener('load', () => {
        if (video) {
            video.play().catch(err => {
                console.log('Autoplay prevented:', err);
            });
        }
    });

    // Play/Pause toggle
    if (playPauseBtn && video) {
        playPauseBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            } else {
                video.pause();
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
            }
        });

        video.addEventListener('play', () => {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        });

        video.addEventListener('pause', () => {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        });
    }

    // Mute/Unmute toggle (simplified - just using single mute icon)
    if (muteBtn && video) {
        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            // Toggle mute icon opacity or add visual feedback if needed
            muteBtn.style.opacity = video.muted ? '0.5' : '1';
        });
    }

    // ========== NAVIGATION DOTS ==========
    const sections = document.querySelectorAll('.section');
    const dots = document.querySelectorAll('.dot');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sections[index].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // ========== Q&A ACCORDION ==========
    const qaItems = document.querySelectorAll('.qa-item');

    qaItems.forEach(item => {
        const question = item.querySelector('.qa-question');
        
        question.addEventListener('click', () => {
            qaItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });

    // ========== CREDENTIALS FILTER ==========
    const filterBtns = document.querySelectorAll('.filter-btn');
    const credentialItems = document.querySelectorAll('.credential-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            credentialItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else if (filter === 'year') {
                    item.style.display = 'block';
                } else if (filter === 'recent') {
                    const year = item.dataset.year;
                    item.style.display = year === '2024' ? 'block' : 'none';
                }
            });
        });
    });

})();