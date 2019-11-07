import Vue from 'vue';
import Router from 'vue-router';

import { auth } from '@/firebase';

import PageLogin from './pages/page-login.vue';
import Page404 from './pages/page-404.vue';

import ItemEditor from './components/item/item-editor.vue';

import Desktop from './components/desktop/desktop.vue';
import AssetsList from './components/asset/assets-list.vue';
import AssetEdit from './components/asset/asset-edit.vue';
import ChallengesList from './components/challenge/challenges-list.vue';
import ChallengeEdit from './components/challenge/challenge-edit.vue';
import ResultsList from './components/result/results-list.vue';
import ResultEdit from './components/result/result-edit.vue';
import TeamsList from './components/team/teams-list.vue';
import TeamEdit from './components/team/team-edit.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: PageLogin
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
          component: ItemEditor,
          props: mountEditorProps
        },
        {
          path: 'challenges',
          name: 'challengesList',
          component: ChallengesList
        },
        {
          path: 'challenge/:itemId',
          name: 'challengeEdit',
          component: ItemEditor,
          props: mountEditorProps
        },
        {
          path: 'results',
          name: 'resultsList',
          component: ResultsList
        },
        {
          path: 'result/:itemId',
          name: 'resultEdit',
          component: ItemEditor,
          props: mountEditorProps
        },
        {
          path: 'teams',
          name: 'teamsList',
          component: TeamsList
        },
        {
          path: 'team/:itemId',
          name: 'teamEdit',
          component: ItemEditor,
          props: mountEditorProps
        }
      ]
    },
    {
      path: '*',
      component: Page404
    }
  ]
});

function mountEditorProps (route) {
  const propsList = {
    assetEdit: {
      editFields: AssetEdit,
      itemCollection: 'assets'
    },
    challengeEdit: {
      editFields: ChallengeEdit,
      itemCollection: 'challenges'
    },
    resultEdit: {
      editFields: ResultEdit,
      itemCollection: 'results'
    },
    teamEdit: {
      editFields: TeamEdit,
      itemCollection: 'teams'
    }
  };

  const itemEditorProps = { itemId: route.params.itemId, ...propsList[route.name] };
  return itemEditorProps;
}

router.beforeEach((to, from, next) => {
  const loginStatus = auth.loginStatus;

  if (loginStatus !== 'loggedin' && to.name !== 'login') {
    next({ name: 'login' });
  } else {
    next();
  };
});

export default router;
