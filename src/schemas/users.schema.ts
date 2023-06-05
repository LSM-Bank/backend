import { z } from "zod";

const userRegisterSchema = z.object({
  name: z.string().max(95),
  email: z.string().email().max(45),
  password: z.string().min(4),
});

const userSchema = userRegisterSchema
  .extend({
    id: z.any(),
    createdAt: z.date(),
    updatedAt: z.date(),
    balance: z.any().default(0).nullable(),
  })
  .omit({ password: true });

const listUsersSchemaResponse = z.array(userSchema);

const userUpdateSchema = z
  .object({
    name: z.string().max(95),
    email: z.string().email().max(45),
    password: z.string().min(4).max(20),
  })
  .partial();

export {
  userSchema,
  userUpdateSchema,
  userRegisterSchema,
  listUsersSchemaResponse,
};
