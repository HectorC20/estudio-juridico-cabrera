export class Client {
    id?: string;
    name: string;
    src: string;
    alt: string;
    pubDate?: Date;
    url?: string;

    constructor(data: Partial<Client> | any) {
        this.id = data.id;
        this.name = data.name || data.nombre || "";
        this.src = data.src || "";
        this.alt = data.alt || "";
        this.pubDate = data.pubDate ? new Date(data.pubDate) : undefined;
        this.url = data.url;
    }
}
