// Simple animation trigger on scroll
(function() {
    'use strict';
    
    // Trigger animations on page load
    window.addEventListener('load', function() {
        var elements = document.querySelectorAll('.triggerAnimation');
        elements.forEach(function(element) {
            element.classList.add('animated');
        });
    });
    
    // Optional: Trigger animations on scroll
    if (typeof window.IntersectionObserver !== 'undefined') {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('.triggerAnimation').forEach(function(element) {
            observer.observe(element);
        });
    }
})();