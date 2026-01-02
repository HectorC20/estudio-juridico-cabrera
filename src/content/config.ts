import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        readingTime: z.number(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        categories: z.array(z.string()),
        tags: z.array(z.string()).optional(),
        author: z.object({
            id: z.string(),
            name: z.string(),
            lastname: z.string(),
            profileImage: z.string(),
        }),
    }),
});

const clientes = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.number().optional(),
        src: z.string().optional(),
        alt: z.string(),
        nombre: z.string().default('Nombre desconocido'),  // Valor por defecto
        pubDate: z.coerce.date().default(new Date()),  // Valor por defecto
        updatedDate: z.coerce.date().optional(),
    }),
});

const alianzas = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.number().optional(),
        src: z.string().optional(),
        alt: z.string(),
        nombre: z.string().optional(),
        pubDate: z.coerce.date().nullable(),
        updatedDate: z.coerce.date().optional(),
        url: z.string().url().optional(),
    }),
});

const paginas = defineCollection({
    type: 'content',
    schema: z.object({
        city: z.string(),
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
    }),
});

const especialidades = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.number().optional(),
        src: z.string().optional(),
        alt: z.string().optional(),
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    })
});

export const collections = { paginas, noticias, clientes, alianzas, especialidades };
