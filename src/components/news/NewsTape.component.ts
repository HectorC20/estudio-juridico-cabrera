import { NewsService } from "@/services/NewsService";
import type { NewsSummary } from "@/models/NewsSummary";

export async function getRelatedNews(currentSlug: string): Promise<NewsSummary[]> {
    const latestNews = await NewsService.getLatest();
    const shuffledNews = shuffleArray(latestNews);
    
    return shuffledNews
        .filter((post: NewsSummary) => normalizeSlug(post.newsName) !== normalizeSlug(currentSlug))
        .slice(0, 4);
}

const shuffleArray = <T>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const normalizeSlug = (slug: string): string => decodeURIComponent(slug).toLowerCase().trim();
