import express from 'express';
import cors from 'cors';
import { errorMiddleware } from '__ser/core/error';
import { feature as userFeature } from '__ser/modules/users';
import { authenticateToken } from './auth-token';
import { setFeatures } from './features';

export function createApp () {
  const app = express();

  app.use(cors({
    origin: process.env.ORIGIN,
    // enables pre-fligth cache (Access-Control-Max-Age) for 24h
    // since the origin server shouldn't change regulary.
    // this is the maximium supported value by firefox, others
    // browsers are more restrict and will cap the value.
    maxAge: 86400
  }));

  app.use(express.json());
  app.use(authenticateToken);

  const features = [userFeature];
  setFeatures(app, features);

  app.use(errorMiddleware);

  return app;
}
