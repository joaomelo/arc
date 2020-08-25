import { LayoutDesktop, LayoutShell } from '__cli/core/layouts';
import { PageSplash } from '__cli/core/pages';
// import { PageAuth } from '__cli/core/auth';
// import { PageAuth, PageAccount, PageUnverified } from '__cli/core/auth';
import { PageDashboard } from '__cli/modules/dashboard';
// import { PagePreferences } from '__cli/modules/profiles';
// import { PageChallenges, PageChallenge } from '__cli/modules/challenges';
// import { PageTeams, PageTeam } from '__cli/modules/teams';

const routes = [
  {
    path: '/shell',
    component: LayoutShell,
    children: [
      { path: '/loading', name: 'loading', component: PageSplash }
      // { path: '/auth', name: 'auth', component: PageAuth }
      // { path: '/unverified', name: 'unverified', component: PageUnverified }
    ]
  },
  {
    path: '/desktop',
    component: LayoutDesktop,
    children: [
      { path: '/dashboard', name: 'dashboard', component: PageDashboard }
      // { path: '/teams/list', name: 'teams', component: PageTeams },
      // { path: '/teams/add', name: 'team-add', component: PageTeam },
      // { path: '/teams/edit/:id', name: 'team-edit', component: PageTeam, props: true },
      // { path: '/challenges/list', name: 'challenges', component: PageChallenges },
      // { path: '/challenges/add', name: 'challenge-add', component: PageChallenge },
      // { path: '/challenges/edit/:id', name: 'challenge-edit', component: PageChallenge, props: true },
      // { path: '/account/edit', name: 'account', component: PageAccount },
      // { path: '/preferences/edit', name: 'preferences', component: PagePreferences }
    ]
  }
];

export { routes };
