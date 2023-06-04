import { Router } from "express";
import {
  deleteUserController,
  getUserController,
  getUserPerIdController,
  registerUserController,
  updateUserController,
} from "../controllers/users.controllers";

const usersRoutes = Router();

usersRoutes.get("", getUserController);

usersRoutes.get("/:id", getUserPerIdController);

usersRoutes.post("", registerUserController);

usersRoutes.patch("", updateUserController);

// usersRoutes.delete("", validateAuthUserMiddleware, deleteUserController);

export default usersRoutes;
