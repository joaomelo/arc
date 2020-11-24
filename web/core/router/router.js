import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { guardRoutes } from './fences';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach(guardRoutes);
