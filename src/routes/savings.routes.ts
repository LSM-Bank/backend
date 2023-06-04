import { Router } from "express";
import { validateAuthUserMiddleware } from "../middlewares/global/validateAuthUser.middlewares";
import {
  deleteSavingController,
  getAllSavingsController,
  getBySavingIDController,
  registerSavingController,
  updateSavingController,
} from "../controllers/savings.controllers";
import { isValidSavingIdMiddleware } from "../middlewares/savings/validateId.middleware";
import {
  savingRegisterSchema,
  savingSchema,
  savingUpdateSchema,
} from "../schemas/savings.schemas";

const savingsRoutes = Router();

savingsRoutes.post(
  "",
  validateAuthUserMiddleware,
  // validateSchemaMiddleware(savingRegisterSchema),
  registerSavingController
);

savingsRoutes.get("", getAllSavingsController);

savingsRoutes.get("/:id", isValidSavingIdMiddleware, getBySavingIDController);

savingsRoutes.patch(
  "/:id",
  validateAuthUserMiddleware,
  // validateSchemaMiddleware(savingUpdateSchema),
  isValidSavingIdMiddleware,
  updateSavingController
);

savingsRoutes.delete(
  "/:id",
  validateAuthUserMiddleware,
  isValidSavingIdMiddleware,
  deleteSavingController
);

export default savingsRoutes;
