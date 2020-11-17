import React from 'react';
import { spaces, colors } from '__cli/core/design';
import { Divider } from '../shapes';

function Header ({ children }) {
  if (!children) return null;
  return <header>{ children }</header>;
};

function Body ({ children }) {
  const { breathable, spacious } = spaces;
  if (!children) return null;
  return (
    <div css={{
      padding: `${spacious} ${breathable}`,
      '> * + *': { marginTop: breathable }
    }}>
      { children }
    </div>
  );
}

function Footer ({ children }) {
  if (!children) return null;
  return (
    <>
      <Divider />
      <footer css={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: spaces.breathable
      }}>
        { children }
      </footer>
    </>
  );
};

function Card ({ header, footer, children, ...rest }) {
  return (
    <section
      css={{
        borderRadius: spaces.breathable,
        backgroundColor: colors.primary,
        overflow: 'hidden'
      }}
      {...rest}
    >
      <Header>{header}</Header>
      <Body>{children}</Body>
      <Footer>{footer}</Footer>
    </section>
  );
}

export { Card };
