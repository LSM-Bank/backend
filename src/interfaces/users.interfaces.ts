import { ISaving } from "./savings.interfaces";
import { ITransfer } from "./transfers.interfaces";



interface IUser {
  id: string;
  name: string;
  email: string;
  balance: number;
  savings: ISaving[];
  transfers: ITransfer[];
  createdAt: Date;
  updatedAt: Date;
}

interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

interface IUserUpdate {
  name?: string;
  email?: string;
  balance?: number;
}

export { IUser, IUserRegister, IUserUpdate };
