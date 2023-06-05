import { z } from "zod";

import {
  listUsersSchemaResponse,
  userRegisterSchema,
  userSchema,
} from "../schemas/users.schema";

type IUserRegister = z.infer<typeof userRegisterSchema>;
type IUser = z.infer<typeof userSchema>;
type IListUsersResponse = z.infer<typeof listUsersSchemaResponse>;

type IUserUpdate = Partial<IUserRegister>;

export { IUser, IUserRegister, IListUsersResponse, IUserUpdate };
