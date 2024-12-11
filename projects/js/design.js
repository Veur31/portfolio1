const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example2', // Navbar ID
    offset: 50, // Offset for active class toggle
});

const spyTarget = document.querySelector('body');
spyTarget.addEventListener('scroll', function () {
    scrollSpy.refresh();
});

document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stops observing after it's visible
            }
        });
    });

    targets.forEach(target => observer.observe(target));
});
