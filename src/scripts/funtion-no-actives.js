export function initializeAnimations() {
    // Verifica si la animación debe ejecutarse (solo si no está marcada en sessionStorage o es una recarga)
    const isReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;

    if (!sessionStorage.getItem('headerAnimated') || isReload) {
        const elementsFromLeft = document.querySelectorAll('.animate-from-left');
        const elementsFromRight = document.querySelectorAll('.animate-from-right');

        // Ocultar temporalmente el contenido antes de la animación
        elementsFromLeft.forEach(el => el.classList.add('hidden-before-animate'));
        elementsFromRight.forEach(el => el.classList.add('hidden-before-animate'));

        // Ejecutar la animación después de un pequeño retraso
        setTimeout(() => {
            elementsFromLeft.forEach(el => {
                el.classList.remove('hidden-before-animate');
                el.classList.add('slideInFromLeft');
            });
            elementsFromRight.forEach(el => {
                el.classList.remove('hidden-before-animate');
                el.classList.add('slideInFromRight');
            });

            // Marcar la animación como completada después de que termine
            setTimeout(() => {
                sessionStorage.setItem('headerAnimated', 'true');
            }, 1000); // Tiempo de duración de la animación
        }, 100); // Pequeño retraso para asegurar que el CSS esté aplicado
    }
}
