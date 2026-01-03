export class Specialty {
    id?: number;
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: Date;
    src?: string;
    alt?: string;
    content?: string;

    constructor(data: Partial<Specialty> | any) {
        this.id = data.id;
        this.title = data.title || "";
        this.description = data.description || "";
        this.pubDate = data.pubDate ? new Date(data.pubDate) : new Date();
        this.updatedDate = data.updatedDate ? new Date(data.updatedDate) : undefined;
        this.src = data.src;
        this.alt = data.alt;
        this.content = data.content;
    }
}
