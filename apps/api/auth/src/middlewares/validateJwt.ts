import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const validateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string | undefined = req
    .header('Authorization')
    ?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'Jwt token missing or expired' });
    return;
  }

  try {
    const validateJwt = jwt.verify(token, process.env['JWT_SECRET']!);

    if (validateJwt) next();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
