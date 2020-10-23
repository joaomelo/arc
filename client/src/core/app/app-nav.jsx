import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { mdiArchive, mdiTarget, mdiAccount, mdiLogout } from '@mdi/js';
import { NavBar, NavLink } from '__cli/core/components';
import { selectIsSignedIn, signOut } from '__cli/modules/auth';

export const AppNav = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

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
          label={t('auth.sign-out')}
          path={mdiLogout }
          to="#"
          onClick={e => dispatch(signOut())}
        />
      </NavBar>
    );
};
