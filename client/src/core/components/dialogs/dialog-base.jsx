import React from 'react';
import { spaces, colors } from '__cli/core/design';
import { HeaderSection, ActionsSection } from '../sections';

function DialogBase ({ header, actions, children, ...rest }) {
  const { breathable } = spaces;
  return (
    <section
      css={{
        borderRadius: breathable,
        backgroundColor: colors.primary,
        overflow: 'hidden'
      }}
      {...rest}
    >
      <HeaderSection header={header} />
      {children}
      <ActionsSection actions={actions} />
    </section>
  );
}

export { DialogBase };
