import { API_BASE_URL } from "@/shared/consts";
import { Specialty } from "@/models/Specialty";

const SPECIALTIES_ENDPOINT = `${API_BASE_URL}/specialties`;

export class SpecialtyService {
    static async getAll(): Promise<Specialty[]> {
        try {
            const response = await fetch(SPECIALTIES_ENDPOINT);
            if (!response.ok) throw new Error("Failed to fetch specialties");
            const data = await response.json();
            return data.map((item: any) => new Specialty(item));
        } catch (error) {
            console.error("Error fetching specialties:", error);
            return [];
        }
    }

    static async getBySlug(slug: string): Promise<Specialty | null> {
        try {
            const response = await fetch(`${SPECIALTIES_ENDPOINT}/${slug}`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error("Failed to fetch specialty details");
            }
            const data = await response.json();
            return new Specialty(data);
        } catch (error) {
            console.error(`Error fetching specialty ${slug}:`, error);
            return null;
        }
    }
}
