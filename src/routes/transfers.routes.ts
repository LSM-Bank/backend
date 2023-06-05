import { Router } from "express";
import {
  getAllTransfersController,
  transferSavingToUserController,
  transferUserToSavingController,
} from "../controllers/transfers.controllers";
import { validateIsUserMiddleware } from "../middlewares/users/validateIsUser.middleware";
import { validateAuthUserMiddleware } from "../middlewares/global/validateAuthUser.middlewares";

const transfersRoutes = Router();

transfersRoutes.post(
  "/savings/:savingId/user/:userId",
  validateAuthUserMiddleware,  
  transferSavingToUserController
);

transfersRoutes.get("", validateAuthUserMiddleware, getAllTransfersController);

transfersRoutes.post(
  "/users/:userId/saving/:savingId",
  validateAuthUserMiddleware,
  transferUserToSavingController
);

export default transfersRoutes;
