import { NewsService } from "@/services/NewsService";
import type { NewsSummary } from "@/models/NewsSummary";

export async function getLatestNews(): Promise<NewsSummary[]> {
    const news = await NewsService.getAll();
    return news.slice(0, 2);
}
