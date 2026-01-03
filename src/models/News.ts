import { NewsSummary } from "./NewsSummary";

export class News extends NewsSummary {
    id?: string;
    readingTime?: number;
    tags?: string[];
    authorId?: string;
    content: string;

    constructor(data: Partial<News> | any) {
        super(data);
        this.id = data.id;
        this.readingTime = data.readingTime;
        this.tags = data.tags || [];
        // Intentar obtener authorId de varias fuentes posibles
        this.authorId = data.authorId || data.id_author || (typeof data.author === 'object' ? data.author.id : data.author);
        this.content = data.content || "";
    }
}
