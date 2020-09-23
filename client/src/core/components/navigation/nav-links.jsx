import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '__cli/core/design';
import { useAuthStore, AUTH_STATUSES } from '__cli/modules/users';
import { NavLink } from './nav-link';

function NavLinks (props) {
  const { t } = useTranslation();
  const signOut = useAuthStore(state => state.signOut);
  const status = useAuthStore(state => state.status);
  const isSignedIn = status === AUTH_STATUSES.SIGNEDIN;

  if (!isSignedIn) return null;

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center'
        // display: 'grid',
        // gridTemplateColumns: 'repeat(4, auto)',
        // columnGap: theme.spacing.s3
      }}
      {...props}
    >
      <NavLink label={t('arcs.arc', { count: 2 })} to="#" />
      <NavLink label={t('challenges.challenge', { count: 2 })} to="#" />
      <NavLink label={t('users.account')} to="#" />
      <NavLink label={t('users.sign-out')} to="#" onClick={signOut} />
    </div>
  );
}

export { NavLinks };
