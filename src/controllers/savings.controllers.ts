import { Request, Response } from "express";
import {
  ISavingRegister,
  ISavingUpdate,
} from "../interfaces/savings.interfaces";
import { registerSavingService } from "../services/savings/registerSaving.service";
import { getAllSavingsService } from "../services/savings/getAllSavings.service";
import { updateSavingService } from "../services/savings/updateSaving.service";
import { deleteSavingService } from "../services/savings/deleteSaving.service";

const registerSavingController = async (req: Request, res: Response) => {
  const payload: ISavingRegister = req.body;
  console.log(req.body.validateAuth.id);
  
  const data = await registerSavingService(payload, req.body.validateAuth.id);
  return res.status(201).json(data);
};

const getAllSavingsController = async (req: Request, res: Response) => {
  const { id } = req.body.validateAuth;
  const data = await getAllSavingsService(id);
  return res.status(200).json(data);
};

const getBySavingIDController = async (req: Request, res: Response) => {
  const data = req.body.validatedBody;
  return res.status(200).json(data);
};

const updateSavingController = async (req: Request, res: Response) => {
  const payload: ISavingUpdate = req.body.validatedBody;
  const data = await updateSavingService(req.params.id, payload);
  return res.status(200).json(data);
};

const deleteSavingController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteSavingService(id);
  return res.status(204).json();
};

export {
  registerSavingController,
  getAllSavingsController,
  getBySavingIDController,
  updateSavingController,
  deleteSavingController,
};
