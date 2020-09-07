import { LayoutDesktop, LayoutShell } from '__cli/core/layouts';
import { PageAuth, PageAccount, PagePreferences } from '__cli/modules/users';
import { PageDashboard } from '__cli/modules/dashboard';
// import { PageChallenges, PageChallenge } from '__cli/modules/challenges';
// import { PageArcs, PageArc } from '__cli/modules/arcs';

const routes = [
  {
    path: '/shell',
    component: LayoutShell,
    children: [
      { path: '/auth', name: 'auth', component: PageAuth }
    ]
  },
  {
    path: '/desktop',
    component: LayoutDesktop,
    children: [
      { path: '/dashboard', name: 'dashboard', component: PageDashboard },
      // { path: '/arcs/list', name: 'arcs', component: PageArcs },
      // { path: '/arcs/add', name: 'arc-add', component: PageArc },
      // { path: '/arcs/edit/:id', name: 'arc-edit', component: PageArc, props: true },
      // { path: '/challenges/list', name: 'challenges', component: PageChallenges },
      // { path: '/challenges/add', name: 'challenge-add', component: PageChallenge },
      // { path: '/challenges/edit/:id', name: 'challenge-edit', component: PageChallenge, props: true },
      { path: '/account/edit', name: 'account', component: PageAccount },
      { path: '/preferences/edit', name: 'preferences', component: PagePreferences }
    ]
  }
];

export { routes };
