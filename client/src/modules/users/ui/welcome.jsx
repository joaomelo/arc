import React from 'react';
import { useTranslation } from 'react-i18next';
import { weights, spaces } from '__cli/core/design';
import { useAuthStore } from '../domain';

function Welcome ({ user }) {
  const { t } = useTranslation();
  const signOut = useAuthStore(state => state.signOut);

  return (
    <div
      css={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div>
        <p
          css={{ fontWeight: weights.bold }}
        >{`${t('users.account')}: ${user}`}</p>
        <button
          onClick={signOut}
          css={{
            display: 'block',
            margin: `${spaces.sp2} auto 0px`
          }}
        >
          {t('users.sign-out')}
        </button>
      </div>
    </div>
  );
}

export { Welcome };
