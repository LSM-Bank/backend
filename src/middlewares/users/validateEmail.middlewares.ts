import { NextFunction, Request, Response } from "express";
import { prismaClient } from "../../server";
import AppError from "../../errors/appError";

const validateEmailMiddlewares = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email } = req.body.validatedBody;

    const isUser = await prismaClient.users.findUnique({
        where: {
            email,
        },
    });

    if (isUser) {
        throw new AppError("Email already exists.", 409);
    }

    return next();
};

export { validateEmailMiddlewares };
