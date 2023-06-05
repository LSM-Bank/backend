import { Request, Response } from "express";
import { registerUserService } from "../services/users/registerUser.service";
import { IUserRegister } from "../interfaces/users.interfaces";
import { getUserService } from "../services/users/getUser.service";

const getUserPerIdController = async (req: Request, res: Response) => {
  const payload: string = req.body.validateAuth.id;
  const data = await getUserService(payload);
  return res.status(200).json(data);
};

const registerUserController = async (req: Request, res: Response) => {
  const payload: IUserRegister = req.body;
  const data = await registerUserService(payload);
  return res.status(201).json(data);
};

export { registerUserController, getUserPerIdController };
