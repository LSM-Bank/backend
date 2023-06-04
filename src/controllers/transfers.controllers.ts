import { Request, Response } from "express";
import { registerTransferSavingToUserService } from "../services/transfers/transferSavingToUser.service";
import { getAllTransfersService } from "../services/transfers/getAllTransfers.service";

const transferSavingToUserController = async (req: Request, res: Response) => {
  const { body, params } = req;
  const data = await registerTransferSavingToUserService(
    params.savingId,
    body.validateAuth.id,
    body.value
  );
  return res.status(201).json(data);
};

const getAllTransfersController = async (req: Request, res: Response) => {
  const { id } = req.body.validateAuth;
  const skip = Number(req.query.skip) || 0;
  const take = Number(req.query.take) || 12;
  const data = await getAllTransfersService(skip, take, id);
  return res.status(201).json(data);
};

export { transferSavingToUserController, getAllTransfersController };
