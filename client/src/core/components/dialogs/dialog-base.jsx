import React from 'react';
import { spaces, colors } from '__cli/core/design';
import { HeaderBase } from '../text';

function DialogBase ({ header, children, ...rest }) {
  return (
    <div
      css={{
        borderRadius: spaces.breathable,
        backgroundColor: colors.primary,
        overflow: 'hidden'
      }}
      {...rest}
    >
      {typeof header === 'string' ? <HeaderBase text={header} /> : header }
      <div css={{ padding: spaces.breathable }}>
        { children }
      </div>
    </div>
  );
}

export { DialogBase };
