import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { weights, spaces, colors, breakpoints } from '@/shared/design';

function NavLink ({ label, path, ...rest }) {
  return (
    <Link
      css={{
        display: 'flex',
        alignItems: 'center',
        padding: spaces.normal,
        ':hover': {
          color: colors.accent
        }
      }}
      {...rest}
    >
      <Icon
        path={path}
        size={1}
        title={label}
      />
      <span
        css={{
          fontWeight: weights.bold,
          [breakpoints.small]: {
            display: 'none'
          }
        }}>
        { label }
      </span>
    </Link>
  );
}

export { NavLink };
