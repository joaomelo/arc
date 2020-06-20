import { LayoutDesktop, LayoutShell } from '__cli/core/layouts';
import { PageSplash } from '__cli/core/loader';
// import { PageTeams } from '__cli/modules/teams';

const routes = [
  {
    path: '/shell',
    component: LayoutShell,
    children: [
      { path: '/loading', name: 'loading', component: PageSplash }
      // { path: '/login', name: 'login', component: PageAuth },
      // { path: '/unverified', name: 'unverified', component: PageUnverified }
    ]
  },
  {
    path: '/desktop',
    component: LayoutDesktop,
    children: [
      { path: '/dashboard', name: 'dashboard', redirect: { name: 'loading' } }
      // { path: '/challenges', name: 'challenges', component: PageChallenges }
      // { path: '/teams', name: 'teams', component: PageTeams }
      // { path: '/account', name: 'account', component: PageAccount }
    ]
  }
];

export { routes };
