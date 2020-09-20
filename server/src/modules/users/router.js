import express from 'express';
import { signIn, signUp } from './services';

const router = express.Router();

router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await signIn(email, password);
    res.json(token);
  } catch {
    res.sendStatus(401);
  }
});

router.post('/sign-up', async (req, res, next) => {
  const { email, password } = req.body;
  const token = await signUp(email, password);
  res.json(token);
});

export { router };
