import {defineCollection, z} from 'astro:content';


const noticias = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
    }),
});

const alianzas = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.number().optional(),
        src: z.string().optional(),
        alt: z.string(),
        nombre: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const asociados = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.number().optional(),
        src: z.string().optional(),
        alt: z.string(),
        nombre: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const especialidades = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.number().optional(),
        src: z.string().optional(),
        alt: z.string(),
        title: z.string(),
        description: z.string()
    })
})

export const collections = {noticias, alianzas, asociados, especialidades};
