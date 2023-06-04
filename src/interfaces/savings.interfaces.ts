import { ITransfer } from "./transfers.interfaces";
import { IUser } from "./users.interfaces";

interface ISaving {
  id: string;
  name: string;
  description?: string;
  balance: number;
  userId: string;
  user: IUser;
  transfers: ITransfer[];
}
interface ISavingRegister {
  name: string;
  description?: string;
  balance?: number;
}

interface ISavingUpdate {
  name?: string;
  description?: string;
  balance?: number;
}

export { ISaving, ISavingRegister, ISavingUpdate };
