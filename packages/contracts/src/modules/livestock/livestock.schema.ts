import { z } from "zod"

export const livestockSchema = z.object({
  id: z.number(),
  animalType: z.string(),
  breed: z.string().optional(),
  quantity: z.number(),
  farmerId: z.number(),
  healthStatus: z.string(),
  lastVaccination: z.date().optional(),
  purpose: z.string(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Livestock = z.infer<typeof livestockSchema>