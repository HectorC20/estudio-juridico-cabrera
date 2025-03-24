import {defineCollection, z} from 'astro:content';

/*
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
*/

const alianzas = defineCollection({
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

const asociados = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.number().optional(),
        src: z.string().optional(),
        alt: z.string(),
        nombre: z.string().optional(),
        pubDate: z.coerce.date().nullable(),  // Cambia a nullable() en lugar de optional()
        updatedDate: z.coerce.date().optional(),
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
})

export const collections = { alianzas, asociados, especialidades};
