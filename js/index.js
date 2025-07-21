// index.js - Homepage specific functionality

// Interactive grid effect
function initInteractiveGrid() {
    const hero = document.querySelector('.hero');
    const gridOverlay = document.querySelector('.grid-overlay');
    
    if (!hero || !gridOverlay) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInHero = false;

    hero.addEventListener('mouseenter', () => {
        isMouseInHero = true;
        gridOverlay.style.pointerEvents = 'auto';
    });

    hero.addEventListener('mouseleave', () => {
        isMouseInHero = false;
        gridOverlay.style.pointerEvents = 'none';
    });

    hero.addEventListener('mousemove', (e) => {
        if (!isMouseInHero) return;
        
        const rect = hero.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        
        // Update CSS custom properties for the spotlight effect
        gridOverlay.style.setProperty('--mouse-x', mouseX + 'px');
        gridOverlay.style.setProperty('--mouse-y', mouseY + 'px');
    });

    // Create dynamic grid lighting effect
    const style = document.createElement('style');
    style.textContent = `
        .grid-overlay::after {
            left: var(--mouse-x, 50%);
            top: var(--mouse-y, 50%);
        }
        
        .hero:hover .grid-overlay::after {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}

// Create particles for background effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize homepage
document.addEventListener('DOMContentLoaded', () => {
    // Initialize common functionality
    if (window.SoverlyCommon) {
        window.SoverlyCommon.initCommon();
        
        // Initialize intersection observer for homepage elements
        window.SoverlyCommon.initIntersectionObserver('.stat, .feature-card, .use-case-pill');
        
        // Add stagger animations
        window.SoverlyCommon.addStaggerDelay('.use-case-pill', 0.05);
        window.SoverlyCommon.addStaggerDelay('.stat', 0.1);
        window.SoverlyCommon.addStaggerDelay('.feature-card', 0.1);
    }
    
    // Initialize homepage-specific features
    initInteractiveGrid();
    createParticles();
});