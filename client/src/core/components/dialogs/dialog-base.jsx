import React from 'react';
import { spaces, colors } from '__cli/core/design';

function DialogBase ({ header, children, ...rest }) {
  return (
    <div
      {...rest}
      css={{
        borderRadius: spaces.breathable,
        backgroundColor: colors.primary,
        overflow: 'hidden'
      }}
    >
      { header }
      <div css={{ padding: spaces.breathable }}>
        { children }
      </div>
    </div>
  );
}

export { DialogBase };
