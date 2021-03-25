import { useTranslation } from 'react-i18next';
import { mdiArchive, mdiTarget, mdiAccount, mdiLogout, mdiCogs } from '@mdi/js';
import { NavBar, NavLink } from '@/shared/components';
import { useCommand } from '@/shared/commands';
import { useIsSignedIn, signOutCommand } from '@/business/users';

export const AppNav = () => {
  const { t } = useTranslation();
  const isSignedIn = useIsSignedIn();
  const { command } = useCommand(signOutCommand);

  return !isSignedIn
    ? <NavBar />
    : (
      <NavBar>
        <NavLink
          label={t('arcs.arc', { count: 2 })}
          path={mdiArchive }
          to="/arcs"
        />
        <NavLink
          label={t('challenges.challenge', { count: 2 })}
          path={mdiTarget }
          to="/challenges" />
        <NavLink
          label={t('auth.account')}
          path={mdiAccount}
          to="/account" />
        <NavLink
          label={t('auth.preferences')}
          path={mdiCogs}
          to="/preferences" />
        <NavLink
          label={t('auth.sign-out')}
          path={mdiLogout }
          to="#"
          onClick={e => command()}
        />
      </NavBar>
    );
};
