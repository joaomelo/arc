import { Link } from 'react-router-dom';
import { appName, appVersion } from '__com/meta';
import { weights, sizes } from '@/shared/design';

function NavLogo (props) {
  return (
    <div {...props}>
      <Link to="/">
        <span
          css={{
            fontSize: sizes.bigger,
            fontWeight: weights.bolder
          }}
        >
          {appName()}
        </span>
        <span>&nbsp;</span>
        <span
          css={{
            fontSize: sizes.small
          }}
        >
          {appVersion()}
        </span>
      </Link>
    </div>
  );
}

export { NavLogo };
