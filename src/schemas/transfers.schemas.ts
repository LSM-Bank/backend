import { z } from "zod";

const transferSchema = z.object({
  id: z.any(),
  userId: z.string(),
  savingId: z.string(),
  value: z.number(),
  createdAt: z.date(),
  received: z.any(),
});

const transferRegisterSchema = z.object({
  value: z.string().optional(),
  savingId: z.string(),
});

const listTransfersSchema = z.array(transferSchema);

export { transferSchema, transferRegisterSchema, listTransfersSchema };
