import { Router } from 'express';
import { userSignUpSchema } from '../zod/zodSchemas';
import { UserSignUp } from '../types/types';

const router: Router = Router();

router.post('/signup', (req, res) => {
  const { email, password, firstName, lastName }: UserSignUp = req.body;

  const validated = userSignUpSchema.safeParse({
    email,
    password,
    firstName,
    lastName,
  });

  validated.success
    ? res.status(200).json({ message: 'Register Success' })
    : res.status(402).json({ message: 'Register Failed' });
});

export { router as signInRouter };
