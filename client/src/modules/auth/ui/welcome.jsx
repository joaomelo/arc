import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { weights, spaces } from '__cli/core/design';
import { signOut } from '../domain';

function WelcomeView ({ email, signOut }) {
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
        >{`${t('users.account')}: ${email}`}</p>
        <button
          onClick={e => signOut()}
          css={{
            display: 'block',
            margin: `${spaces.normal} auto 0px`
          }}
        >
          {t('users.sign-out')}
        </button>
      </div>
    </div>
  );
}

const mapState = state => ({ email: state.auth.currentUser.email });
const mapDispatch = { signOut };
export const Welcome = connect(mapState, mapDispatch)(WelcomeView);
