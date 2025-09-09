document.addEventListener('DOMContentLoaded', function() {
    // Scroll Reveal Animation for Sections
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // When 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally, stop observing once visible if you don't want to re-animate on scroll back
                // observer.unobserve(entry.target);
            } else {
                // Optional: remove 'visible' class if you want sections to hide when scrolled away
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('scroll-hidden'); // Initial state: hidden
        sectionObserver.observe(section);
    });


    // Dynamic handling for contact form floating labels (CSS handles most, but this ensures robustness)
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        // Add/remove 'has-content' class based on input value
        const checkInput = () => {
            if (input.value.length > 0) {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
        };

        input.addEventListener('input', checkInput);
        // Check on load for autofilled inputs
        checkInput();

        // Also handle focus/blur for a more robust label animation, though CSS focus handles much
        input.addEventListener('focus', () => input.classList.add('focused'));
        input.addEventListener('blur', () => input.classList.remove('focused'));
    });
});
