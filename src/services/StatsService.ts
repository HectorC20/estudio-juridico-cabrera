import { API_BASE_URL } from "@/shared/consts";

const STATS_ENDPOINT = `${API_BASE_URL}/stats`;

export interface HomeStats {
    casesManaged: string;
}

export class StatsService {
    static async getHomeStats(): Promise<HomeStats | null> {
        try {
            const response = await fetch(`${STATS_ENDPOINT}/home`);
            if (!response.ok) {
                 if (response.status === 404) return null;
                 throw new Error("Failed to fetch home stats");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching home stats:", error);
            return null;
        }
    }
}
