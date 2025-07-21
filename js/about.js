// about.js - About page specific functionality

// Timeline progress animation
function updateTimelineProgress() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const visibleItems = document.querySelectorAll('.timeline-item.visible');
    const progress = document.getElementById('timeline-progress');
    
    if (visibleItems.length > 0 && progress) {
        const percentage = (visibleItems.length / timelineItems.length) * 100;
        progress.style.height = `${percentage}%`;
    }
}

// Initialize about page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize common functionality
    if (window.SoverlyCommon) {
        window.SoverlyCommon.initCommon();
        
        // Initialize intersection observer with timeline callback
        window.SoverlyCommon.initIntersectionObserver(
            '.mv-card, .value-card, .timeline-item, .founder-card',
            (entry) => {
                // Update timeline progress when timeline items become visible
                if (entry.target.classList.contains('timeline-item')) {
                    updateTimelineProgress();
                }
            }
        );
        
        // Add stagger animations
        window.SoverlyCommon.addStaggerDelay('.value-card', 0.1);
        window.SoverlyCommon.addStaggerDelay('.timeline-item', 0.2);
        window.SoverlyCommon.addStaggerDelay('.founder-card', 0.2);
    }
});