import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';

// Obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas de archivos
const constantsPath = path.join(__dirname, '../src/shared/consts.ts');
const entryPath = path.join(__dirname, '../dist/server/entry.mjs');

// Función para extraer valores de constantes del archivo TS usando Regex
// Nota: Hacemos esto para evitar tener que compilar TS para este script simple
function extractConstant(content, name) {
    const regex = new RegExp(`export const ${name} = ["']([^"']+)["'];`);
    const match = content.match(regex);
    return match ? match[1] : null;
}

try {
    // Verificar si PATH_MAIN está habilitado en .env
    const isPathMainEnabled = process.env.PATH_MAIN === 'true';

    if (!isPathMainEnabled) {
        process.exit(0);
    }


    // 1. Leer consts.ts
    if (!fs.existsSync(constantsPath)) {
        throw new Error(`No se encontró el archivo de constantes en: ${constantsPath}`);
    }
    const constantsContent = fs.readFileSync(constantsPath, 'utf-8');
    
    const clientPath = extractConstant(constantsContent, 'CPANEL_CLIENT_PATH');
    const serverPath = extractConstant(constantsContent, 'CPANEL_SERVER_PATH');

    if (!clientPath || !serverPath) {
        throw new Error('No se pudieron extraer CPANEL_CLIENT_PATH o CPANEL_SERVER_PATH de consts.ts');
    }


    // 2. Leer y modificar entry.mjs
    if (!fs.existsSync(entryPath)) {
        // No lanzamos error si no existe entry.mjs para no romper el flujo si se ejecuta en un momento indebido,
        // pero avisamos. O mejor, mantenemos el comportamiento de lanzar error si es un script post-build crítico.
        // Asumo que si se llama a este script es porque se espera que exista el build.
        throw new Error(`No se encontró el archivo entry.mjs en: ${entryPath}. Asegúrate de haber ejecutado el build primero.`);
    }

    let entryContent = fs.readFileSync(entryPath, 'utf-8');

    // Reemplazamos las líneas client y server
    // Buscamos tanto la versión hardcoded antigua como la dinámica o cualquier otra
    // La regex busca la clave "client": seguido de cualquier valor hasta la coma
    entryContent = entryContent.replace(
        /"client":\s*("[^"]*"|new URL\([^)]+\)\.href),?/,
        `"client": "${clientPath}",`
    );

    entryContent = entryContent.replace(
        /"server":\s*("[^"]*"|new URL\([^)]+\)\.href),?/,
        `"server": "${serverPath}",`
    );

    // 3. Guardar cambios
    fs.writeFileSync(entryPath, entryContent, 'utf-8');

} catch (error) {
    console.error('❌ Error actualizando rutas:', error.message);
    process.exit(1);
}
