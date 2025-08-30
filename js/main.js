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