import { getCollection } from "astro:content";
import { Client } from "@/models/Client";

export async function getAssociates() {
    return (await getCollection('clientes')).sort(
        (a, b) => {
            const aPubDate = a.data.pubDate ? a.data.pubDate.valueOf() : 0;
            const bPubDate = b.data.pubDate ? b.data.pubDate.valueOf() : 0;
            return bPubDate - aPubDate;
        }
    );
}

export function createAssociateFromPost(post: any): Client {
    return new Client({
        src: post.data.src || 'https://res.cloudinary.com/dixzojb4s/image/upload/v1729437484/cliente3_sjbzeo.jpg',
        alt: post.data.alt || 'imagen del asociado'
    });
}
