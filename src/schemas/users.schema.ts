import { z } from "zod";

const userRegisterSchema = z.object({
  name: z.string().max(95),
  email: z.string().email().max(45),
  password: z.string().min(4).max(20),
});

const userSchema = userRegisterSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
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
