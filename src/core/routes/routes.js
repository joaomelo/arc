import { LayoutDesktop } from '@/core/layouts';
import { Joker } from '@/core/components';

import { PageLogin } from '@/modules/auth';

// import { PageMaintence, Page404 } from '@/core/pages';
// import { UserEdit } from '../components';
// import AssetsList from './components/asset/assets-list.vue';
// import AssetEdit from './components/asset/asset-edit.vue';
// import ChallengesList from './components/challenge/challenges-list.vue';
// import ChallengeEdit from './components/challenge/challenge-edit.vue';
// import ResultsList from './components/result/results-list.vue';
// import ResultEdit from './components/result/result-edit.vue';
// import TeamsList from './components/team/teams-list.vue';
// import TeamEdit from './components/team/team-edit.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: PageLogin
  },
  {
    path: '/start',
    name: 'start',
    redirect: { name: 'innerjoker' }
    // redirect: { name: 'assetsList' }
  },
  {
    path: '/desktop',
    component: LayoutDesktop,
    children: [
      // {
      //     path: 'users/:itemId',
      //     name: 'userEdit',
      //     component: UserEdit,
      //     props: true
      // }
      //     //     // {
      //     //   path: 'assets',
      //     //   name: 'assetsList',
      //     //   component: AssetsList
      //     // },
      //     // {
      //     //   path: 'asset/:itemId',
      //     //   name: 'assetEdit',
      //     //   component: AssetEdit,
      //     //   props: true
      //     // },
      //     // {
      //     //   path: 'challenges',
      //     //   name: 'challengesList',
      //     //   component: ChallengesList
      //     // },
      //     // {
      //     //   path: 'challenge/:itemId',
      //     //   name: 'challengeEdit',
      //     //   component: ChallengeEdit,
      //     //   props: true
      //     // },
      //     // {
      //     //   path: 'results',
      //     //   name: 'resultsList',
      //     //   component: ResultsList
      //     // },
      //     // {
      //     //   path: 'result/:itemId',
      //     //   name: 'resultEdit',
      //     //   component: ResultEdit,
      //     //   props: true
      //     // },
      //     // {
      //     //   path: 'teams',
      //     //   name: 'teamsList',
      //     //   component: TeamsList
      //     // },
      //     // {
      //     //   path: 'team/:itemId',
      //     //   name: 'teamEdit',
      //     //   component: TeamEdit,
      //     //   props: true
      //     // }
      { path: '/innerjoker', name: 'innerjoker', component: Joker }
    ]
  },
  {
    path: '/joker',
    name: 'joker',
    component: Joker
  }
  // {
  //   path: '*',
  //   component: Page404
  // }
];

export { routes };
