import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

import PageSolve from './pages/page-solve.vue';
import PageLogin from './pages/page-login.vue';
import Page404 from './pages/page-404.vue';

import Desktop from './components/desktop/desktop.vue';
import AssetsList from './components/asset/assets-list.vue';
import AssetEdit from './components/asset/asset-edit.vue';
import ChallengesList from './components/challenge/challenges-list.vue';
import ChallengeEdit from './components/challenge/challenge-edit.vue';
import ResultsList from './components/result/results-list.vue';
import ResultEdit from './components/result/result-edit.vue';
import TeamsList from './components/team/teams-list.vue';
import TeamEdit from './components/team/team-edit.vue';
import ProfileEdit from './components/profile/profile-edit.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'solve',
      component: PageSolve
    },
    {
      path: '/login',
      name: 'login',
      component: PageLogin
    },
    {
      path: '/start',
      name: 'start',
      redirect: { name: 'assetsList' }
    },
    {
      path: '/desktop',
      component: Desktop,
      children: [
        {
          path: 'assets',
          name: 'assetsList',
          component: AssetsList
        },
        {
          path: 'asset/:itemId',
          name: 'assetEdit',
          component: AssetEdit,
          props: true
        },
        {
          path: 'challenges',
          name: 'challengesList',
          component: ChallengesList
        },
        {
          path: 'challenge/:itemId',
          name: 'challengeEdit',
          component: ChallengeEdit,
          props: true
        },
        {
          path: 'results',
          name: 'resultsList',
          component: ResultsList
        },
        {
          path: 'result/:itemId',
          name: 'resultEdit',
          component: ResultEdit,
          props: true
        },
        {
          path: 'teams',
          name: 'teamsList',
          component: TeamsList
        },
        {
          path: 'team/:itemId',
          name: 'teamEdit',
          component: TeamEdit,
          props: true
        },
        {
          path: 'profile/:itemId',
          name: 'profileEdit',
          component: ProfileEdit,
          props: true
        }
      ]
    },
    {
      path: '*',
      component: Page404
    }
  ]
});

router.beforeEach((to, from, next) => {
  const loginStatus = store.getters.getLoginStatus;
  const newRoute = to.name;

  if (loginStatus === 'unsolved' && newRoute !== 'solve') {
    next({ name: 'solve' });
  } else if (loginStatus === 'loggedout' && newRoute !== 'login') {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
