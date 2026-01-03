import { API_BASE_URL } from "@/shared/consts";
import { Author } from "@/models/Author";

const AUTHORS_ENDPOINT = `${API_BASE_URL}/authors`;

export class AuthorService {
    static async getAll(): Promise<Author[]> {
        try {
            const response = await fetch(AUTHORS_ENDPOINT);
            if (!response.ok) throw new Error("Failed to fetch authors");
            const data = await response.json();
            return data.map((item: any) => new Author(item));
        } catch (error) {
            console.error("Error fetching authors:", error);
            return [];
        }
    }

    static async getById(id: string): Promise<Author | null> {
        try {
            const response = await fetch(`${AUTHORS_ENDPOINT}/${id}`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error("Failed to fetch author");
            }
            const data = await response.json();
            return new Author(data);
        } catch (error) {
            console.error(`Error fetching author ${id}:`, error);
            return null;
        }
    }
}
