// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'ABOGADOS EN TUMBES | ESTUDIO JURÍDICO CABRERA ';
export const SITE_DESCRIPTION = 'Casos y leyes en ESTUDIO JURÍDICO CABRERA';

export const API_BASE_URL = import.meta.env.PUBLIC_NODE_API_WAM || process.env.PUBLIC_NODE_API_WAM;

if (!API_BASE_URL) {
    console.error("❌ Error: PUBLIC_NODE_API_WAM no está definido en el entorno.");
}
