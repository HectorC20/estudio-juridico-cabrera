// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'ABOGADOS EN TUMBES | ESTUDIO JURÍDICO CABRERA ';
export const SITE_DESCRIPTION = 'Casos y leyes en ESTUDIO JURÍDICO CABRERA';

export const API_BASE_URL = import.meta.env.PUBLIC_NODE_API_WAM || "http://localhost:4322/api/v1";

if (!API_BASE_URL) {
    console.error(" Error: PUBLIC_NODE_API_WAM no está definido en el entorno.");
}

// Constantes de rutas para el despliegue en cPanel
// Estas rutas son utilizadas por el script post-build para configurar entry.mjs
export const CPANEL_CLIENT_PATH = "file:///home/estudiojuridicoc/estudio_juridico/dist/client/";
export const CPANEL_SERVER_PATH = "file:///home/estudiojuridicoc/estudio_juridico/dist/server/";