import React from 'react';
import { Link } from 'react-router-dom';
import { weights, spaces, colors } from '__cli/core/design';

function NavLink ({ label, ...rest }) {
  return (
    <Link
      css={{
        fontWeight: weights.bolder,
        padding: spaces.sp2,
        ':hover': {
          color: colors.accent
        }
      }}
      { ...rest }
    >
      { label }
    </Link>
  );
}

export { NavLink };
