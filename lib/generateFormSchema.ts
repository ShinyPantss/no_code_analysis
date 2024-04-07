import z from "zod";
export const formSchema = z.object({
    title: z.string().optional(),
    Width: z.coerce.number().optional(),
    xLabel: z.string().optional(),
    yLabel: z.string().optional(),
    grid: z.boolean().optional(),
    color: z.string().optional(),
    markerSize: z.coerce.number().optional(),
    imageUrl: z.string().optional(),
    errors: z.string().optional(),
  });