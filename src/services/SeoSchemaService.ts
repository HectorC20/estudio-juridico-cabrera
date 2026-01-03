import { API_BASE_URL } from "@/shared/consts";

const SCHEMA_ENDPOINT = `${API_BASE_URL}/seo/schema`;

export class SeoSchemaService {
    /**
     * Obtiene datos estructurados dinámicos (Schema.org) para una página o tipo de entidad.
     * @param type Tipo de esquema (ej: 'LegalService', 'Article')
     * @param page Identificador de página opcional (ej: 'home')
     */
    static async getSchema(type: string, page?: string): Promise<any | null> {
        try {
            let url = `${SCHEMA_ENDPOINT}?type=${type}`;
            if (page) {
                url += `&page=${page}`;
            }

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000); // 2s timeout

            const response = await fetch(url, {
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error("Failed to fetch schema data");
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching schema for type ${type}:`, error);
            return null;
        }
    }
}
