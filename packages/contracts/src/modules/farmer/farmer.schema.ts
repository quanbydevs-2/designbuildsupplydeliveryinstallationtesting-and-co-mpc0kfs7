import { z } from "zod"

export const farmerSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  barangay: z.string(),
  farmSize: z.number(),
  farmType: z.string(),
  contactNumber: z.string().optional(),
  registrationDate: z.date(),
  status: z.string(),
  notes: z.string().optional(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Farmer = z.infer<typeof farmerSchema>