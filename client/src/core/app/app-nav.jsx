import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavBar, NavLink } from '__cli/core/components';

import { useAuthStore, AUTH_STATUSES } from '__cli/modules/users';

function AppNav (props) {
  const { t } = useTranslation();
  const signOut = useAuthStore(state => state.signOut);
  const status = useAuthStore(state => state.status);
  const isSignedIn = status === AUTH_STATUSES.SIGNEDIN;

  return !isSignedIn
    ? <NavBar linksCount={0} />
    : (
      <NavBar linksCount={4}>
        <NavLink label={t('arcs.arc', { count: 2 })} to="#" />
        <NavLink label={t('challenges.challenge', { count: 2 })} to="#" />
        <NavLink label={t('users.account')} to="#" />
        <NavLink label={t('users.sign-out')} to="#" onClick={signOut} />
      </NavBar>
    );
}

export { AppNav };
