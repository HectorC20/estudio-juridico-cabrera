import  { Author } from './Author';

export class NoticiasPostModel{
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: Date;
    heroImage?: string;
    readingTime: number;
    categories: string[];
    tags?: string[];
    author: Author;
    constructor(props: NoticiasPostModel) {
        this.title = props.title;
        this.description = props.description;
        this.pubDate = props.pubDate;
        this.updatedDate = props.updatedDate;
        this.heroImage = props.heroImage;
        this.readingTime = props.readingTime;
        this.categories = props.categories;
        this.tags = props.tags;
        this.author = props.author;
    }
}
