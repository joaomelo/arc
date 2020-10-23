import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { weights, spaces } from '__cli/core/design';
import { selectCurrentUserEmail, signOut } from '../domain';

export const Welcome = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const email = useSelector(selectCurrentUserEmail);

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
          onClick={e => dispatch(signOut())}
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
