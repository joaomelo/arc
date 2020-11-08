import express from 'express';
import { errorMiddleware } from '__ser/core/error';
import { feature as userFeature } from '__ser/modules/users';
import { authenticateToken } from './auth-token';
import { setFeatures } from './features';

export function createApp () {
  const app = express();

  app.use(express.json());
  app.use(authenticateToken);

  const features = [userFeature];
  setFeatures(app, features);

  app.use(errorMiddleware);

  return app;
}
