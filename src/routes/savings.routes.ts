import { Router } from "express";
import { validateAuthUserMiddleware } from "../middlewares/global/validateAuthUser.middlewares";
import {
  getAllSavingsController,
  getBySavingIDController,
  registerSavingController,
  updateSavingController,
} from "../controllers/savings.controllers";
import { isValidSavingIdMiddleware } from "../middlewares/savings/validateId.middleware";
import {
  savingUpdateSchema,
} from "../schemas/savings.schemas";
import { validateSchemaMiddleware } from "../middlewares/global/validateSchema.middleware";

const savingsRoutes = Router();

savingsRoutes.post("", validateAuthUserMiddleware, registerSavingController);

savingsRoutes.get("", validateAuthUserMiddleware, getAllSavingsController);

savingsRoutes.get(
  "/:savingId",
  isValidSavingIdMiddleware,
  getBySavingIDController
);

savingsRoutes.patch(
  "/:savingId",
  validateAuthUserMiddleware,
  validateSchemaMiddleware(savingUpdateSchema),
  isValidSavingIdMiddleware,
  updateSavingController
);

export default savingsRoutes;
