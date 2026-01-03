
const handleStickyHeader = () => {
    const header = document.querySelector('.section-header') || document.querySelector('.section-header-other');
    if (!header) return;

    // Usamos requestAnimationFrame para mejor rendimiento en scroll
    let ticking = false;
    const scrollThreshold = 100;

    const updateHeader = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('is-sticky');
        } else {
            header.classList.remove('is-sticky');
        }
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll);
    updateHeader(); // Check inicial
};

// Soporte para Astro View Transitions y carga normal
document.addEventListener('astro:page-load', handleStickyHeader);
document.addEventListener('DOMContentLoaded', handleStickyHeader);
