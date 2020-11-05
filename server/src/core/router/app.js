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

  // used to enable history mode in react router
  // it rewrites all html request to the index.html
  app.use(history({
    verbose: !isProduction(),
    // option bellows enforces that the middleware will only act
    // if accept header 'text/html' is present
    htmlAcceptHeaders: ['text/html']
  }));

  const staticRoot = resolve(__dirname, 'public');
  app.use(express.static(staticRoot));

  app.use(authenticateToken);

  const features = [userFeature];
  setFeatures(app, features);

  app.use(errorMiddleware);

  return app;
}
