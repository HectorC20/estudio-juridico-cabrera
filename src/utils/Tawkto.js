// Declaramos una variable global para asegurarnos que el script se carga solo una vez
// let tawkScriptLoaded = false;

// export const Tawk_API = {};

// Tawk_API.LoadStart = new Date();

// export function loadTawkScript() {
//     // Si el script ya ha sido cargado, no hacemos nada
//     if (tawkScriptLoaded) {
//         return;
//     }

//     // Marca que el script se ha cargado
//     tawkScriptLoaded = true;

//     var s1 = document.createElement("script");
//     s1.id = "tawk-script"; // Asigna un ID para evitar duplicados
//     s1.async = true;
//     s1.src = import.meta.env.PUBLIC_KEY_TAWKTO;
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');

//     var s0 = document.getElementsByTagName("script")[0];
//     s0.parentNode.insertBefore(s1, s0);
// }
