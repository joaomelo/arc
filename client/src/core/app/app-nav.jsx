import React from 'react';
import { useTranslation } from 'react-i18next';
import { mdiArchive, mdiTarget, mdiAccount, mdiLogout, mdiCogs } from '@mdi/js';
import { NavBar, NavLink } from '__cli/core/components';
import { useIsSignedIn, useSignOut } from '__cli/modules/auth';

export const AppNav = () => {
  const { t } = useTranslation();
  const isSignedIn = useIsSignedIn();
  const { request } = useSignOut();

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
          label={t('users.preferences')}
          path={mdiCogs}
          to="/preferences" />
        <NavLink
          label={t('auth.sign-out')}
          path={mdiLogout }
          to="#"
          onClick={e => request()}
        />
      </NavBar>
    );
};
