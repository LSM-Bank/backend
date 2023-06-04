import { Request, Response } from "express";
import { loginService } from "../services/login/login.service";

const loginController = async (req: Request, res: Response) => {
  const payload = req.body;
  const data = await loginService(payload);
  return res.status(201).json(data);
};

export { loginController };
