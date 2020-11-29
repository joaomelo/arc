import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { createBlockPrivateRoutes } from './middlewares';

export function initRouter (store) {
  Vue.use(VueRouter);

  const router = new VueRouter({
    mode: 'history',
    routes
  });

  const isSignedIn = () => store.getters.isSignedIn;
  const blockPrivateRoutes = createBlockPrivateRoutes(isSignedIn);
  router.beforeEach(blockPrivateRoutes);

  return router;
}
