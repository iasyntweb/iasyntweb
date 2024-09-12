document.addEventListener('DOMContentLoaded', function() {
    const fadeInUpElements = document.querySelectorAll('.fade-in-up');
    const slideInLeftElements = document.querySelectorAll('.slide-in-left');

    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInUpElements.forEach(element => observer.observe(element));
    slideInLeftElements.forEach(element => observer.observe(element));
});
