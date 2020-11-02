import express from 'express';
import { createServiceHandler } from '__ser/core/router';
import { signIn, signUp, updateEmail, updatePassword, updatePreferences } from './services';

const router = express.Router();

router.post('/sign-in', createServiceHandler(signIn, { isPublic: true }));
router.post('/sign-up', createServiceHandler(signUp, { isPublic: true }));
router.post('/update-email', createServiceHandler(updateEmail));
router.post('/update-password', createServiceHandler(updatePassword));
router.post('/update-preferences', createServiceHandler(updatePreferences));

export { router };
