import { PrismaClient } from "@prisma/client";
import app from "./app";

const PORT = process.env.PORT || 3000;
const prismaClient = new PrismaClient();

process.env.DEBUG = "prisma:*";

app.listen(PORT, () => {
  console.log(`App is running in http://localhost:${PORT}`);
});

export { prismaClient };
