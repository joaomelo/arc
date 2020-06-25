import Vue from 'vue';
import VueRouter from 'vue-router';
import { fenceRoutes } from './fence';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

fenceRoutes(router);

export { router };
