import express from 'express';
import { createServiceHandler } from './service-handler';

function setRoute (router, route) {
  const { method, path, service, options } = route;
  router[method](path, createServiceHandler(service, options));
}

function setFeature (app, feature) {
  const router = express.Router();

  const { routes, name } = feature;
  routes.forEach(route => setRoute(router, route));
  app.use(`/${name}`, router);
}

export function setFeatures (app, features) {
  features.forEach(feature => setFeature(app, feature));
}
