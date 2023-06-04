import yup from "yup";
import { userSchema } from "./users.schema";
import { transferSchema } from "./translate.schemas";

const savingSchema: any = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required().max(50),
  description: yup.string(),
  user: userSchema,
  userId: yup.string().required(),
  balance: yup.number(),
  transfers: transferSchema.list,
});

const savingUpdateSchema = yup.object().shape({
  name: yup.string().max(50),
  description: yup.string(),
});

const savingRegisterSchema = yup.object().shape({
  name: yup.string().required().max(50),
  description: yup.string(),
});

export { savingSchema, savingUpdateSchema, savingRegisterSchema };

import { z } from "zod";

const savingSchema = z.object({
  
})
