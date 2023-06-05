import "express-async-errors";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import handlerAppError from "./errors/handleAppError";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
import savingsRoutes from "./routes/savings.routes";
import transfersRoutes from "./routes/transfers.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/savings", savingsRoutes);
app.use("/transfers", transfersRoutes);

app.use(handlerAppError);

export default app;
