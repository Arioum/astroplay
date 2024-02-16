import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { signInRouter } from './routes/signin';
import { validateUserSignIn } from './middlewares/validateUserInput';
import { validateJwt } from './middlewares/validateJwt';

dotenv.config();
const app = express();
app.use(express.json());
const a = process.env.JWT_SECRET;
console.log(a);

app.use(cors());
app.use('/auth', signInRouter);
app.use(validateJwt);
app.use(validateUserSignIn);

app.listen(4001, () => console.log('Auth service running on port 4001'));
