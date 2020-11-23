import React from 'react';
import { weights, sizes } from '@/core/design';

export const HeaderText = ({ text }) => {
  if (!text) return null;

  return (
    <h2
      css={{
        textAlign: 'center',
        fontWeight: weights.bolder,
        fontSize: sizes.big
      }}
    >
      { text }
    </h2>
  );
};
