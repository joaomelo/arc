import express from 'express';
import { signIn } from './services';

const router = express.Router();

router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;
  const token = await signIn(email, password);
  res.json(token);
});

export { router };
