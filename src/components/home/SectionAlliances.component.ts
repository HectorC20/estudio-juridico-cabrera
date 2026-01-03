import { getCollection } from "astro:content";
import { Client } from "@/models/Client";

export async function getClients() {
    return (await getCollection('clientes')).sort(
        (a, b) => {
            const aPubDate = a.data.pubDate ? a.data.pubDate.valueOf() : 0;
            const bPubDate = b.data.pubDate ? b.data.pubDate.valueOf() : 0;
            return bPubDate - aPubDate;
        }
    );
}

export function createClientFromPost(post: any): Client {
    return new Client({
        src: post.data.src || 'https://res.cloudinary.com/dixzojb4s/image/upload/v1729437484/cliente3_sjbzeo.jpg',
        alt: post.data.alt || 'imagen del cliente',
        name: post.data.nombre || 'Nombre desconocido',
        pubDate: post.data.pubDate || new Date()
    });
}
