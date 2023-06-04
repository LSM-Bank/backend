import yup from "yup";
import { userSchema } from "./users.schema";
import { savingSchema } from "./savings.schemas";

const transferSchema = yup.object().shape({
  id: yup.string().required(),
  user: userSchema,
  userId: yup.string().required(),
  saving: savingSchema,
  savingId: yup.string().required(),
  value: yup.number().required(),
  createdAt: yup.date().required(),
});

const transferUpdateSchema = yup.object().shape({
  name: yup.string().max(50),
  description: yup.string(),
});

const transferRegisterSchema = yup.object().shape({
  name: yup.string().required().max(50),
  description: yup.string(),
  savingId: yup.string().required(),
});

export { transferSchema, transferRegisterSchema, transferUpdateSchema };