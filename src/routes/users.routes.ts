import { Router } from "express";
import {
  getUserPerIdController,
  registerUserController,
} from "../controllers/users.controllers";
import { validateAuthUserMiddleware } from "../middlewares/global/validateAuthUser.middlewares";
import { validateIsUserMiddleware } from "../middlewares/users/validateIsUser.middleware";
import {
  depositController,
  getAllDepositsController,
} from "../controllers/deposits.controllers";

const usersRoutes = Router();

usersRoutes.get("", validateAuthUserMiddleware, getUserPerIdController);

usersRoutes.post("", registerUserController);

usersRoutes.post(
  "/:userId/deposit",
  validateAuthUserMiddleware,
  validateIsUserMiddleware,
  depositController
);

usersRoutes.get(
  "/deposits",
  validateAuthUserMiddleware,
  getAllDepositsController
);

export default usersRoutes;
