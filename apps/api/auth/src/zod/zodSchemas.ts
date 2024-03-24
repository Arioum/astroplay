import zod from 'zod';

export const userSignUpSchema = zod.object({
  email: zod.string().email().toLowerCase(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

export const userSignInSchema = zod.object({
  email: zod.string().email().toLowerCase(),
  password: zod.string(),
});
