import { z } from "zod";

const depositSchema = z.object({
  id: z.any(),
  value: z.number(),
  createdAt: z.date(),
  userId: z.string(),
});

const depositRegisterSchema = z.object({
  value: z.number(),
});

export { depositSchema, depositRegisterSchema };
