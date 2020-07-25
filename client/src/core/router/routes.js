import { LayoutDesktop, LayoutShell } from '__cli/core/layouts';
import { PageSplash } from '__cli/core/loader';
import { PageAuth, PageAccount, PageUnverified } from '__cli/core/auth';
import { PageDashboard } from '__cli/modules/dashboard';
import { PagePreferences } from '__cli/modules/profiles';
import { PageTeams, PageTeam } from '__cli/modules/teams';

const routes = [
  {
    path: '/shell',
    component: LayoutShell,
    children: [
      { path: '/loading', name: 'loading', component: PageSplash },
      { path: '/auth', name: 'auth', component: PageAuth },
      { path: '/unverified', name: 'unverified', component: PageUnverified }
    ]
  },
  {
    path: '/desktop',
    component: LayoutDesktop,
    children: [
      { path: '/dashboard', name: 'dashboard', component: PageDashboard },
      { path: '/teams/list', name: 'teams', component: PageTeams },
      { path: '/teams/add', name: 'teams-add', component: PageTeam },
      { path: '/account/edit', name: 'account', component: PageAccount },
      { path: '/preferences/edit', name: 'preferences', component: PagePreferences }
    ]
  }
];

export { routes };
