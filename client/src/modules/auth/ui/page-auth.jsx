import React from 'react';
import { spaces } from '__cli/core/design';
import { useIsSignedIn } from '../domain';
import { DialogWelcome } from './dialog-welcome';
import { DialogSign } from './dialog-sign';
import { ContentDisclaimer } from './content-disclaimer';

export const PageAuth = () => {
  const isSignedIn = useIsSignedIn();
  return (
    <div>
      { isSignedIn ? <DialogWelcome /> : <DialogSign /> }
      <ContentDisclaimer css={{ marginTop: spaces.presumptuous }} />
    </div>
  );
};
