import React from 'react';
import { Link } from 'react-router-dom';
import { appName, appVersion } from '__com/meta';

function NavLogo (props) {
  return (
    <div
      css={{
        width: '100%',
        height: '100%'
      }}
      {...props}
    >
      <Link to="/">
        <span
          css={{
            fontSize: '1.75rem',
            fontWeight: '500'
          }}
        >
          {appName()}
        </span>
        <span>&nbsp;</span>
        <span
          css={{
            fontSize: '0.75rem'
          }}
        >
          {appVersion()}
        </span>
      </Link>
    </div>
  );
}

export { NavLogo };
