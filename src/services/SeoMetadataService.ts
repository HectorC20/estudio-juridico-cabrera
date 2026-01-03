import type { PageMetadata } from "@/models/PageMetadata";
import { API_BASE_URL } from "@/shared/consts";

const METADATA_ENDPOINT = `${API_BASE_URL}/seo/metadata`;

export class SeoMetadataService {
    /**
     * Obtiene los metadatos SEO para una ruta específica.
     * @param path La ruta relativa (ej: '/noticias/mi-articulo')
     */
    static async getMetadata(path: string): Promise<PageMetadata | null> {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000); // 2s timeout
            
            const encodedPath = encodeURIComponent(path);
            const response = await fetch(`${METADATA_ENDPOINT}?path=${encodedPath}`, {
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error("Failed to fetch metadata");
            }

            return await response.json();
        } catch (error) {
            console.error(`Error fetching metadata for path ${path}:`, error);
            return null;
        }
    }
}
