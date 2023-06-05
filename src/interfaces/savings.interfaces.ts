import {
  savingRegisterSchema,
  savingSchema,
  savingUpdateSchema,
} from "../schemas/savings.schemas";
import { z } from "zod";

type ISaving = z.infer<typeof savingSchema>;
type ISavingRegister = z.infer<typeof savingRegisterSchema>;
type ISavingUpdate = Partial<typeof savingUpdateSchema>;

export { ISaving, ISavingRegister, ISavingUpdate };
