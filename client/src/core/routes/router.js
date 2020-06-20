import Vue from 'client/src/core/routes/vue';
import Router from 'client/src/core/routes/vue-router';

import { routes } from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
});

export { router };
