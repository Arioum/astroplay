import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { UserSignIn } from '../types/types';
import { validateUserSignIn } from '../middlewares/validateUserInput';
import { validateJwt } from '../middlewares/validateJwt';
import { prisma } from '../../config/prismaClient';

const router = Router();

router.post('/signin', validateJwt, validateUserSignIn, async (req, res) => {
  const { email, password }: UserSignIn = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      res.status(402).json({ message: 'User not Found' });
      return;
    }

    if (user.email === email && user.password === password) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET!);
      res.status(200).json({ token });
    } else {
      res.status(400).json({ message: 'User does not exists' });
    }
  } catch (error) {}
});

export { router as signInRouter };
