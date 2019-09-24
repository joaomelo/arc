import Vue from 'vue';
import Router from 'vue-router';

import store from './store';
import PageAssets from './pages/page-assets.vue';
import PageChallenges from './pages/page-challenges.vue';
import PageResults from './pages/page-results.vue';
import PageLogin from './pages/page-login.vue';
import Page404 from './pages/page-404.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'assets' },
      meta: {
        authRequired: true
      }
    },
    {
      path: '/assets',
      name: 'assets',
      component: PageAssets,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: PageChallenges,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/results',
      name: 'results',
      component: PageResults,
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
  const loggedIn = store.getters.isLoggedIn;
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
