import { compare } from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";
import "dotenv/config";
import AppError from "../../errors/appError";
import { ILogin } from "../../interfaces/login.interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

const loginService = async (data: ILogin) => {
  const userRepository = AppDataSource.getMongoRepository(User);
  const { email, password } = data;
  const user: User | null = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch: boolean = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    { email: user.email, id: user.id },
    process.env.SECRET_KEY as Secret,
    {
      expiresIn: "24h",
      subject: user.email,
    }
  );

  return { token, id: user.id };
};

export { loginService };
