import { LayoutDesktop, LayoutShell } from '__cli/core/layouts';
import { PageSplash } from '__cli/core/loader';
import { PageAuth, PageAccount, PageUnverified } from '__cli/core/auth';
import { TeamsPage } from '__cli/modules/teams';

const routes = [
  {
    path: '/shell',
    component: LayoutShell,
    children: [
      { path: '/loading', name: 'loading', component: PageSplash },
      { path: '/login', name: 'login', component: PageAuth },
      { path: '/unverified', name: 'unverified', component: PageUnverified }
    ]
  },
  {
    path: '/desktop',
    component: LayoutDesktop,
    children: [
      { path: '/dashboard', name: 'dashboard', redirect: { name: 'teams' } },
      { path: '/challenges/list', name: 'challenges', redirect: { name: 'teams' } },
      { path: '/teams/list', name: 'teams', component: TeamsPage },
      { path: '/account/edit', name: 'account', component: PageAccount }
    ]
  }
];

export { routes };
