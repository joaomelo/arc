import React from 'react';
import { weights, sizes } from '__cli/core/design';

function HeaderBase ({ text, ...rest }) {
  return text
    ? (
      <h2
        css={{
          textAlign: 'center',
          fontWeight: weights.bolder,
          fontSize: sizes.big
        }}
        {...rest}
      >
        { text }
      </h2>
    )
    : null;
}

export { HeaderBase };
