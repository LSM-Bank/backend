import { Router } from "express";
import { loginController } from "../controllers/login.controllers";

const loginRoutes = Router();

loginRoutes.post("", loginController);

export default loginRoutes;
