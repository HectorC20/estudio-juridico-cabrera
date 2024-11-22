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

export const collections = {noticias, alianzas, asociados, especialidades};
