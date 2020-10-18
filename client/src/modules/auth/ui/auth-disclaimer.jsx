import React from 'react';
import { appDescription } from '__com/meta';
import { spaces, weights, sizes } from '__cli/core/design';
import { DialogBase } from '__cli/core/components';

function AuthDisclaimer (props) {
  return (
    <DialogBase {...props}>
      <article
        css={{
          textAlign: 'justify',
          padding: spaces.normal,
          '*': {
            fontWeight: weights.normal,
            fontSize: sizes.normal
          },
          '> * + *': {
            marginTop: spaces.breathable
          }
        }}
      >
        <p>{appDescription()}</p>
        <p>This is a personal instance and you are welcome to freely sign up for an account. But since this is a hobby project, i can&apos;t guarantee any service level.</p>
        <p>The most reliable way to use the app is first check the open sourced code in GitHub and when confortable raise your own instance.</p>
      </article>
    </DialogBase>
  );
}

export { AuthDisclaimer };
