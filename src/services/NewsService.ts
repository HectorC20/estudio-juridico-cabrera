import { API_BASE_URL } from "@/shared/consts";
import { News } from "@/models/News";
import { NewsSummary } from "@/models/NewsSummary";

const NEWS_ENDPOINT = `${API_BASE_URL}/news`;
const AUTHORS_ENDPOINT = `${API_BASE_URL}/authors`;
const _urlTags= '/tags/';
const _urlCategories= '/categories/';
const _urlNews= '/news/';
export class NewsService {
    static async getAll(limit?: number): Promise<NewsSummary[]> {
        try {
            const url = limit ? `${NEWS_ENDPOINT}?limit=${limit}` : NEWS_ENDPOINT;
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch news");
            const data = await response.json();
            return data.map((item: any) => new NewsSummary(item));
        } catch (error) {
            console.error("Error fetching news:", error);
            return [];
        }
    }

    static async getBySlug(slug: string): Promise<News | null> {
        try {
            const response = await fetch(`${NEWS_ENDPOINT}/${slug}`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error("Failed to fetch news details");
            }
            const data = await response.json();
            return new News(data);
        } catch (error) {
            console.error(`Error fetching news ${slug}:`, error);
            return null;
        }
    }

    static async getByAuthor(authorId: string): Promise<NewsSummary[]> {
        try {
            const response = await fetch(`${AUTHORS_ENDPOINT}/${authorId}${_urlNews}`);
            if (!response.ok) throw new Error("Failed to fetch author news");
            const data = await response.json();
            return data.map((item: any) => new NewsSummary(item));
        } catch (error) {
            console.error(`Error fetching news for author ${authorId}:`, error);
            return [];
        }
    }

    // Deprecated: Use getAll instead
    static async getNewsList(): Promise<NewsSummary[]> {
        return this.getAll();
    }

    static async getLatest(limit: number = 4): Promise<NewsSummary[]> {
        return this.getAll(limit);
    }

    static async searchByTitle(title: string): Promise<NewsSummary[]> {
        try {
            // Since there is no search endpoint in the documentation,
            // we fetch all news and filter by title client-side.
            const allNews = await this.getAll();
            const lowerTitle = title.toLowerCase();
            return allNews.filter(news => news.title.toLowerCase().includes(lowerTitle));
        } catch (error) {
            console.error("Error searching news:", error);
            return [];
        }
    }

    static async getCategories(): Promise<string[]> {
        try {
            const response = await fetch(`${NEWS_ENDPOINT}${_urlCategories}`);
            if (!response.ok) throw new Error("Failed to fetch categories");
            return await response.json();
        } catch (error) {
            console.error("Error fetching categories:", error);
            return [];
        }
    }

    static async getByCategory(category: string): Promise<NewsSummary[]> {
        try {
            const response = await fetch(`${NEWS_ENDPOINT}${_urlCategories}${category}`);
            if (!response.ok) throw new Error(`Failed to fetch news for category ${category}`);
            const data = await response.json();
            return data.map((item: any) => new NewsSummary(item));
        } catch (error) {
            console.error(`Error fetching news for category ${category}:`, error);
            return [];
        }
    }

    static async getTags(): Promise<string[]> {
        try {
            const response = await fetch(`${NEWS_ENDPOINT}${_urlTags}`);
            if (!response.ok) throw new Error("Failed to fetch tags");
            return await response.json();
        } catch (error) {
            console.error("Error fetching tags:", error);
            return [];
        }
    }

    static async getByTag(tag: string): Promise<NewsSummary[]> {
        try {
            const response = await fetch(`${NEWS_ENDPOINT}${_urlTags}${tag}`);
            if (!response.ok) throw new Error(`Failed to fetch news for tag ${tag}`);
            const data = await response.json();
            return data.map((item: any) => new NewsSummary(item));
        } catch (error) {
            console.error(`Error fetching news for tag ${tag}:`, error);
            return [];
        }
    }

    static async getHighlighted(): Promise<NewsSummary | null> {
        try {
            const response = await fetch(`${NEWS_ENDPOINT}/highlighted`);
            if (!response.ok) {
                 // If the endpoint doesn't exist yet, we might want to fallback to fetching latest and picking one, 
                 // but for this task I will implement it as if the endpoint exists or will exist.
                 if (response.status === 404) return null;
                 throw new Error("Failed to fetch highlighted news");
            }
            const data = await response.json();
            return new NewsSummary(data);
        } catch (error) {
            console.error("Error fetching highlighted news:", error);
            return null;
        }
    }
}
