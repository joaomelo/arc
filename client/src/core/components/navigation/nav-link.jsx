import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '__cli/core/design';

function NavLink ({ label, ...rest }) {
  return (
    <Link
      css={{
        fontWeight: theme.weight.w3,
        padding: theme.spacing.s2,
        ':hover': {
          color: theme.colors.accent
        }
      }}
      { ...rest }
    >
      { label }
    </Link>
  );
}

export { NavLink };
