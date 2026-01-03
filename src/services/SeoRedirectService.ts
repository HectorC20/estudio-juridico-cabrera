import { API_BASE_URL } from "@/shared/consts";

export interface RedirectRule {
    source: string;
    destination: string;
    type: 301 | 302;
}

const REDIRECTS_ENDPOINT = `${API_BASE_URL}/seo/redirects`;

export class SeoRedirectService {
    /**
     * Obtiene la lista de redirecciones activas.
     * Ideal para ser llamado en middleware o al inicio de la carga de la aplicación.
     */
    static async getRedirects(): Promise<RedirectRule[]> {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000); // 2s timeout
            
            const response = await fetch(REDIRECTS_ENDPOINT, {
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error("Failed to fetch redirects");
            }

            return await response.json();
        } catch (error) {
            console.error("Error fetching redirects:", error);
            return [];
        }
    }

    /**
     * Verifica si una ruta específica tiene una redirección configurada.
     * @param currentPath Ruta actual
     */
    static async checkRedirect(currentPath: string): Promise<RedirectRule | null> {
        try {
            // Nota: Dependiendo de la implementación del backend, podría haber un endpoint específico
            // o podríamos filtrar la lista completa en el cliente.
            // Asumimos aquí que obtenemos todas y filtramos por eficiencia en red si son pocas,
            // o se podría implementar un endpoint específico `?path=` si son muchas.
            const allRedirects = await this.getRedirects();
            return allRedirects.find(r => r.source === currentPath) || null;
        } catch (error) {
            return null;
        }
    }
}
