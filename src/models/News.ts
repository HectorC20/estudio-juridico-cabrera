import { NewsSummary } from "./NewsSummary";

export class News extends NewsSummary {
    id?: string;
    readingTime?: number;
    categories?: string[];
    tags?: string[];
    authorId?: string;
    content: string;

    constructor(data: Partial<News> | any) {
        super(data);
        this.id = data.id;
        this.readingTime = data.readingTime;
        this.categories = data.categories || [];
        this.tags = data.tags || [];
        this.authorId = data.authorId || data.id_author;
        this.content = data.content || "";
    }
}
