
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