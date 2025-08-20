import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    tecnologias: z.array(z.string()),
    portada: z.string(),
    imagenes: z.array(z.string())
  }),
});

export const collections = { proyectos };