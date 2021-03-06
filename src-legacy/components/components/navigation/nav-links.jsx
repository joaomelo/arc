import { spaces } from '@/shared/design';

function NavLinks ({ children }) {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'flex-end',
        '> *': {
          marginRight: spaces.normal
        }
      }}
    >
      { children }
    </div>
  );
}

export { NavLinks };
