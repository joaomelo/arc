import React from 'react';
import { colors } from '__cli/core/design';
import { ButtonBase } from './button-base';

function ButtonSubmit (props) {
  const { primary, secondary, accent } = colors;
  return (
    <ButtonBase
      css={{
        backgroundColor: secondary,
        ':hover, :focus': {
          backgroundColor: accent
        },
        color: primary
      }}
      type="submit"
      {...props}
    />
  );
}

export { ButtonSubmit };
