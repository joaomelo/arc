import { resolve } from 'path';
import express from 'express';
import history from 'connect-history-api-fallback';
import { isProduction } from '__com/meta';
import { errorMiddleware } from '__ser/core/error';
import { feature as userFeature } from '__ser/modules/users';
import { authenticateToken } from './auth-token';
import { setFeatures } from './features';

export function createApp () {
  const app = express();

  app.use(express.json());
  app.use(history({ verbose: !isProduction() }));

  const staticRoot = resolve(__dirname, 'public');
  app.use(express.static(staticRoot));

  app.use(authenticateToken);

  const features = [userFeature];
  setFeatures(app, features);

  app.use(errorMiddleware);

  return app;
}
