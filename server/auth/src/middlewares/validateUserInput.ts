import { Request, Response, NextFunction } from 'express';
import zod from 'zod';
import { UserSignIn } from '../types/types';
import { userSignInSchema } from '../zod/zodSchemas';

export const validateUserSignIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password }: UserSignIn = req.body;

  const validated = userSignInSchema.safeParse({ email, password });

  validated.success
    ? next()
    : res.status(402).json({ message: 'Error validating the user' });
};
