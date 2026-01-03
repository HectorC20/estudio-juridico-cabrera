export class NewsSummary {
    slug: string;
    newsName: string;
    title: string;
    heroImage?: string;
    pubDate?: Date;
    updatedDate?: Date;
    status: string;
    description?: string;
    categories: string[];

    constructor(data: Partial<NewsSummary> | any) {
        this.newsName = data.newsName || data.slug || "";
        this.slug = this.newsName;
        this.title = data.title || "";
        this.heroImage = data.heroImage;
        this.pubDate = data.pubDate ? new Date(data.pubDate) : undefined;
        this.updatedDate = data.updatedDate ? new Date(data.updatedDate) : undefined;
        this.status = data.status || "borrador";
        this.description = data.description;
        this.categories = data.categories || [];
    }
}
