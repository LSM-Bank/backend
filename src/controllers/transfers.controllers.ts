import { Request, Response } from "express";
import { getAllTransfersService } from "../services/transfers/getAllTransfers.service";
import { transferUserToSavingService } from "../services/transfers/transferUserToSaving.service";
import { transferSavingToUserService } from "../services/transfers/transferSavingToUser.service";

const transferSavingToUserController = async (req: Request, res: Response) => {
  const { body, params } = req;
  const data = await transferSavingToUserService(
    params.savingId,
    params.userId,
    body.value
  );
  return res.status(201).json(data);
};

const transferUserToSavingController = async (req: Request, res: Response) => {
  const { body, params } = req;
  const data = await transferUserToSavingService(
    params.savingId,
    body.validateAuth.id,
    body.value
  );
  return res.status(201).json(data);
};

const getAllTransfersController = async (req: Request, res: Response) => {
  const { id } = req.body.validateAuth;
  const data = await getAllTransfersService(id);
  return res.status(201).json(data);
};

export {
  transferSavingToUserController,
  getAllTransfersController,
  transferUserToSavingController,
};
