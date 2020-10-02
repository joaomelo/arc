import React from 'react';
import { spaces, colors } from '__cli/core/design';

function DialogBase ({ header, children, ...rest }) {
  return (
    <div
      {...rest}
      css={{
        borderRadius: spaces.sp3,
        backgroundColor: colors.primary,
        overflow: 'hidden'
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
