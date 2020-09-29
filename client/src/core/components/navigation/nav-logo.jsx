import React from 'react';
import { Link } from 'react-router-dom';
import { appName, appVersion } from '__com/meta';
import { theme, sizes } from '__cli/core/design';

function NavLogo (props) {
  return (
    <div {...props}>
      <Link to="/">
        <span
          css={{
            fontSize: sizes.sz5,
            fontWeight: theme.weight.w3
          }}
        >
          {appName()}
        </span>
        <span>&nbsp;</span>
        <span
          css={{
            fontSize: sizes.sz2
          }}
        >
          {appVersion()}
        </span>
      </Link>
    </div>
  );
}

export { NavLogo };
