import { Router } from "express";
import {
  getAllTransfersController,
  transferSavingToUserController,
} from "../controllers/transfers.controllers";

const transfersRoutes = Router();

transfersRoutes.post("/savings/:savingId/user", transferSavingToUserController);

transfersRoutes.get("", getAllTransfersController);

// transfersRoutes.post(
//   "/savings/:savingId/:receiverSavingId",
//   validateAuthUserMiddleware
// );
// transfersRoutes.post("/users/:receiverUserId", validateAuthUserMiddleware);

export default transfersRoutes;
