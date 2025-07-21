// main.js - Shared functionality across all pages

// Header scroll effect
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    let menuOpen = false;
    
    mobileMenu.addEventListener('click', () => {
        menuOpen = !menuOpen;
        
        if (menuOpen) {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'var(--bg-primary)';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '2rem';
            navLinks.style.borderTop = '1px solid var(--border-color)';
            navLinks.style.gap = '1.5rem';
            
            const spans = mobileMenu.querySelectorAll('span');
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            navLinks.style.display = 'none';
            
            const spans = mobileMenu.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initIntersectionObserver(selectors, callback) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (callback) {
                    callback(entry);
                }
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll(selectors).forEach(el => {
        observer.observe(el);
    });

    return observer;
}

// Add stagger animation delays
function addStaggerDelay(selector, delayMultiplier) {
    document.querySelectorAll(selector).forEach((el, index) => {
        el.style.animationDelay = `${index * delayMultiplier}s`;
    });
}

// Initialize common functionality
function initCommon() {
    initHeaderScroll();
    initMobileMenu();
    initSmoothScrolling();
}

// Export functions for use in other files
window.SoverlyCommon = {
    initCommon,
    initIntersectionObserver,
    addStaggerDelay
};