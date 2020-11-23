import React from 'react';
import { colors } from '@/core/design';
import { ButtonBase } from './button-base';

export const ButtonSecondary = (props) => {
  const { primary, secondary, accent } = colors;
  return (
    <ButtonBase
      css={{
        backgroundColor: primary,
        ':hover': {
          backgroundColor: accent
        },
        color: secondary
      }}
      {...props}
    />
  );
};
