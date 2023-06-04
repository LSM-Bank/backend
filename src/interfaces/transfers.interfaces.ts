import { ISaving } from "./savings.interfaces";

interface ITransfer {
  id: string;
  createdAt: Date;
  userId: string;
  savingId: string;
  value: number;
  saving: ISaving;
}

interface ITransferRegister {
  userId: string;
  savingId: string;
  value: number;
}

export { ITransfer, ITransferRegister };
