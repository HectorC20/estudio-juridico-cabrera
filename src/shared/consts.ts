// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'ABOGADOS EN TUMBES | ESTUDIO JURÍDICO CABRERA ';
export const SITE_DESCRIPTION = 'Casos y leyes en ESTUDIO JURÍDICO CABRERA';
//Desarrollo
export const API_BASE_URL = "http://localhost:4322/api/v1";

//Produccion
// export const API_BASE_URL = "https://app-management-web.vercel.app/api/v1";

//Produccion 

if (!API_BASE_URL) {
    console.error(" Error: PUBLIC_API_URL no está definido en el entorno.");
}

// Constantes de rutas para el despliegue en cPanel
// Estas rutas son utilizadas por el script post-build para configurar entry.mjs
// NOTA: Estas rutas solo se aplican si PATH_MAIN=true en el archivo .env (ver scripts/update-paths.mjs)
export const CPANEL_CLIENT_PATH = "file:///home/estudiojuridicoc/estudio_juridico/dist/client/";
export const CPANEL_SERVER_PATH = "file:///home/estudiojuridicoc/estudio_juridico/dist/server/";