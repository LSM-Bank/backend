import { z } from "zod";
import {
  depositRegisterSchema,
  depositSchema,
} from "../schemas/deposit.schema";

type IDeposit = z.infer<typeof depositSchema>;
type IDepositRegister = z.infer<typeof depositRegisterSchema>;

export { IDeposit, IDepositRegister };
