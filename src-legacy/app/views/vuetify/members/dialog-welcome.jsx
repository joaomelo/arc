import React from 'react';
import { useTranslation } from 'react-i18next';
import { weights, spaces } from '@/shared/design';
import { useCommand } from '@/shared/commands';
import { useCurrentUserEmail, signOutCommand } from '../domain';

export const DialogWelcome = () => {
  const { t } = useTranslation();
  const email = useCurrentUserEmail;
  const { command } = useCommand(signOutCommand);

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
        >{`${t('auth.account')}: ${email}`}</p>
        <button
          onClick={e => command()}
          css={{
            display: 'block',
            margin: `${spaces.normal} auto 0px`
          }}
        >
          {t('auth.sign-out')}
        </button>
      </div>
    </div>
  );
};
