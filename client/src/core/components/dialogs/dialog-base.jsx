import React from 'react';
import { spaces, colors } from '__cli/core/design';

function DialogBase ({ header, children, ...rest }) {
  return (
    <div
      css={{
        borderRadius: spaces.sp3,
        backgroundColor: colors.primary,
        overflow: 'hidden',
        ...rest
      }}
    >
      { header }
      <div css={{ padding: spaces.sp3 }}>
        { children }
      </div>
    </div>
  );
}

export { DialogBase };
