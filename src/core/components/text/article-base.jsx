import React from 'react';
import { spaces, weights, sizes } from '@/core/design';

function ArticleBase ({ children, ...rest }) {
  return (
    <article
      css={{
        textAlign: 'justify',
        padding: spaces.normal,
        '*': {
          fontWeight: weights.normal,
          fontSize: sizes.normal
        },
        '> p + p': {
          marginTop: spaces.breathable
        }
      }}
      {...rest}
    >
      {children}
    </article>
  );
}

export { ArticleBase };
