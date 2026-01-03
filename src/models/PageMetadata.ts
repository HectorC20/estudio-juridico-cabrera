
export class PageMetadata{
    constructor(
        public title: string,
        public description: string,
        public keywords?: string[],
        public ogImage?: string,
        public robots?: string,
        public canonicalUrl?: string,
    ){}
    
    static fromJSON(json: PageMetadata): PageMetadata{
        return new PageMetadata(
            json.title,
            json.description,
            json.keywords,
            json.ogImage,
            json.robots,
            json.canonicalUrl,
        )
    }

    toJSON(): string {
        return JSON.stringify({
            title: this.title,
            description: this.description,
            keywords: this.keywords,
            ogImage: this.ogImage,
            robots: this.robots,
            canonicalUrl: this.canonicalUrl,
        });
    }
}