const revealSections = () => {
    const sections = document.querySelectorAll('.section');
    const footer = document.querySelector('.site-footer');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => revealObserver.observe(section));
    if (footer) revealObserver.observe(footer);
};

window.addEventListener('DOMContentLoaded', revealSections);
