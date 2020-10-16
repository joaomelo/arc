import React from 'react';
import { useTranslation } from 'react-i18next';
import { weights, spaces } from '__cli/core/design';

function Welcome ({ user, onSignOut }) {
  const { t } = useTranslation();

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
          onClick={onSignOut}
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
