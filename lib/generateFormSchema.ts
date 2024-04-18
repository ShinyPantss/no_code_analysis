import z from "zod";
export const formSchema = z.object({
    title: z.string().max(50).optional(),
    lineWidth: z.coerce.number().optional(),
    Width: z.coerce.number().optional(),
    xLabel: z.string().max(60).optional(),
    yLabel: z.string().max(50).optional(),
    grid: z.boolean().optional(),
    color: z.string().optional(),
    markerSize: z.coerce.number().optional(),
    imageUrl: z.string().optional(),
    errors: z.string().optional(),
  });