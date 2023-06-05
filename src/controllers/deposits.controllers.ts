import { Request, Response } from "express";
import { depositService } from "../services/deposits/deposit.service";
import { getAllDepositService } from "../services/deposits/getAllDeposits.service";

const depositController = async (req: Request, res: Response) => {
    const { body, params } = req;
    const data = await depositService(params.userId, body.value);
    return res.status(200).json(data);
  };

const getAllDepositsController = async (req: Request, res: Response) => {
    const { validateAuth } = req.body;
    const data = await getAllDepositService(validateAuth.id);
    return res.status(200).json(data);
  };
  
  export { depositController, getAllDepositsController };