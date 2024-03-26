import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { signInRouter } from './routes/signin';
import { validateUserSignIn } from './middlewares/validateUserInput';
import { validateJwt } from './middlewares/validateJwt';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());
app.use('/auth', signInRouter);
app.use(validateJwt);
app.use(validateUserSignIn);

mongoose
  .connect(process.env.DATABASE_URL!)
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(`Error occured while connecting: ${err}`));

app.listen(4001, () => console.log('Auth service running on port 4001'));
