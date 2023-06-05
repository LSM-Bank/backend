import {
  transferRegisterSchema,
  transferSchema,
} from "../schemas/transfers.schemas";
import { z } from "zod";

type ITransfer = z.infer<typeof transferSchema>;
type ITransferRegister = z.infer<typeof transferRegisterSchema>;

export { ITransfer, ITransferRegister };
