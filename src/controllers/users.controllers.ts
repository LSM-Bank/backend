import { Request, Response } from "express";
import { registerUserService } from "../services/users/registerUser.service";
import { getUserService } from "../services/users/getUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { IUserRegister } from "../interfaces/users.interfaces";

const getUserController = async (req: Request, res: Response) => {
  const userId = req.body.validateAuth.sub;
  const data = await getUserService(userId);
  return res.status(200).json(data);
};

const getUserPerIdController = async (req: Request, res: Response) => {
  return res.status(200).json(req.body.validateAuth);
};

const registerUserController = async (req: Request, res: Response) => {
  const payload: IUserRegister = req.body.validatedBody;
  const data = await registerUserService(payload);
  return res.status(201).json(data);
};

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService(id);
  return res.status(204).json({});
};

const updateUserController = async (req: Request, res: Response) => {
  const { body, params } = req;
  const data = await updateUserService(params.id, body.validatedBody);
  return res.status(204).json(data);
};

export {
  registerUserController,
  getUserController,
  getUserPerIdController,
  deleteUserController,
  updateUserController,
};
