import { z } from "zod";

const savingSchema = z.object({
  id: z.any(),
  name: z.string().max(50),
  description: z.string().optional(),
  userId: z.string(),
  balance: z.number().default(0),
});

const savingUpdateSchema = z
  .object({
    name: z.string().max(50),
    balance: z.number(),
    description: z.string(),
  })
  .partial();

const savingRegisterSchema = z.object({
  name: z.string().max(50),
  description: z.string().optional(),
});

const listSavingsSchemaResponse = z.array(savingSchema);

export { savingSchema, savingUpdateSchema, savingRegisterSchema, listSavingsSchemaResponse };
