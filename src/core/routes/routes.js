import { Desktop } from '@src/core/desktop';
import { Joker } from '@src/common/joker';

import { PageLogin } from '@src/modules/auth';
import { EditProfile } from '@src/modules/profiles';
// import { TeamsList } from '@src/modules/teams';

// import { PageMaintence, Page404 } from '@src/core/pages';
// import AssetsList from './components/asset/assets-list.vue';
// import AssetEdit from './components/asset/asset-edit.vue';
// import ChallengesList from './components/challenge/challenges-list.vue';
// import ChallengeEdit from './components/challenge/challenge-edit.vue';
// import ResultsList from './components/result/results-list.vue';
// import ResultEdit from './components/result/result-edit.vue';
// import TeamEdit from './components/team/team-edit.vue';

const routes = [
  { path: '/login', name: 'login', component: PageLogin },
  { path: '/start', name: 'start', redirect: { name: 'innerjoker' } /* redirect: { name: 'assetsList' } */ },
  {
    path: '/desktop',
    component: Desktop,
    children: [
      // { path: 'teams', name: 'teamsList', component: TeamsList },
      { path: 'profiles/:itemId', name: 'profileEdit', component: EditProfile, props: true },
      { path: '/innerjoker', name: 'innerjoker', component: Joker }
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
      //     //   path: 'team/:itemId',
      //     //   name: 'teamEdit',
      //     //   component: TeamEdit,
      //     //   props: true
      //     // }
    ]
  } // {
  //   path: '*',
  //   component: Page404
  // }
];

export { routes };
