import Vue from 'vue';
import Router from 'vue-router';
import PageAssets from './pages/page-assets.vue';
import PageLogin from './pages/page-login.vue';
import Page404 from './pages/page-404.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageAssets,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: PageLogin
    },
    {
      path: '*',
      component: Page404
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(record => record.meta.authRequired);
  const loggedIn = false; // store.getters.isLoggedIn;
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
