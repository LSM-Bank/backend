// import { NextFunction, Request, Response } from "express";
// import { AnyObject } from "yup";
// import AppError from "../../errors/appError";

// const validateSchemaMiddleware =
//   (schema: any) =>
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const validated = await schema.validate(req.body, {
//         stripUnknown: true,
//         abortEarly: false,
//       });

//       req.body.validatedBody = validated;
//       return next();
//     } catch (err: any) {
//       throw new AppError(err.errors, 401);
//     }
//   };

// export { validateSchemaMiddleware };
