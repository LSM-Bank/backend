import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  return {
    type: "mongodb",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
