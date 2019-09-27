import Vue from 'vue';
import Router from 'vue-router';

import PageAssets from './pages/page-assets.vue';
import PageChallenges from './pages/page-challenges.vue';
import PageResults from './pages/page-results.vue';
import PageLogin from './pages/page-login.vue';
import Page404 from './pages/page-404.vue';
import PageLoading from './pages/page-loading.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'assets' }
    },
    {
      path: '/loading',
      name: 'loading',
      component: PageLoading
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
      component: PageChallenges
    },
    {
      path: '/results',
      name: 'results',
      component: PageResults
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
  if (!router.app.$auth.isUserSolved && to.name !== 'loading') {
    next('/loading');
  } else {
    next();
  };
});

export default router;
