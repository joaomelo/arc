import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { NavBar, NavLink } from '__cli/core/components';
import { selectIsSignedIn, signOut } from '__cli/modules/auth';

function AppNavView ({ isSignedIn, signOut }) {
  const { t } = useTranslation();

  return !isSignedIn
    ? <NavBar linksCount={0} />
    : (
      <NavBar linksCount={4}>
        <NavLink label={t('arcs.arc', { count: 2 })} to="#" />
        <NavLink label={t('challenges.challenge', { count: 2 })} to="#" />
        <NavLink label={t('users.account')} to="#" />
        <NavLink label={t('users.sign-out')} to="#" onClick={e => signOut()} />
      </NavBar>
    );
}

const mapDispatch = { signOut };
const mapState = state => ({ isSignedIn: selectIsSignedIn(state) });
export const AppNav = connect(mapState, mapDispatch)(AppNavView);
