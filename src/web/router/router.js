import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

export function initRouter () {
  Vue.use(VueRouter);

  const router = new VueRouter({
    mode: 'history',
    routes
  });

  return router;
}
