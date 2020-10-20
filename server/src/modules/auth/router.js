import express from 'express';
import { signIn, signUp, updateEmail, updatePassword } from './services';

const router = express.Router();

const createServiceHandler = service => async (req, res, next) => {
  try {
    const result = await service(req.body);
    res.json(result);
  } catch (e) {
    next(e);
  }
};

router.post('/sign-in', createServiceHandler(signIn));
router.post('/sign-up', createServiceHandler(signUp));
router.post('/update-email', createServiceHandler(updateEmail));
router.post('/update-password', createServiceHandler(updatePassword));

export { router };
