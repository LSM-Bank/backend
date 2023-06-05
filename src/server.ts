import app from "./app";
import "dotenv/config";
import AppDataSource from "./data-source";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log("Server is running!");
    });
  })
  .catch((err: any) => {
    console.log(err);
  });
