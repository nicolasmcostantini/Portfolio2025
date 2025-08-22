import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    tecnologias: z.array(z.string()),
    portada: z.string(),
    imagenes: z.array(z.string()),
    caracteristicas: z.array(z.string()).optional(),
    desafios: z.array(z.string()).optional(),
    aprendizajes: z.array(z.string()).optional(),
    fecha: z.string().optional(),
    estado: z.string().optional(),
    repositorio: z.string().optional(),
    demo: z.string().optional(),
    slug: z.string().optional()
  }),
});

export const collections = { proyectos };