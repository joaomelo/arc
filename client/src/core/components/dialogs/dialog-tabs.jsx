import React, { useState } from 'react';
import { weights, spaces, colors } from '__cli/core/design';
import { DialogBase } from './dialog-base';

function DialogTabs ({ children }) {
  const [currentTab, setCurrentTab] = useState(children[0].props.header);
  return (
    <DialogBase
      header={
        <ol
          css={{
            display: 'grid',
            gridTemplateColumns: `repeat(${children.length}, minmax(max-content, 1fr))`,
            listStyle: 'none',
            cursor: 'pointer'
          }}
        >
          {
            children.map(child => {
              const { header } = child.props;
              return (
                <li
                  key={header}
                  label={header}
                  onClick={e => setCurrentTab(header)}
                  css={{
                    textAlign: 'center',
                    padding: spaces.breathable,
                    backgroundColor: header === currentTab ? colors.secondary : colors.dark,
                    color: header === currentTab ? colors.primary : colors.light,
                    fontWeight: header === currentTab ? weights.bolder : weights.bold,
                    ':hover': {
                      backgroundColor: colors.accent
                    }
                  }}
                >
                  {header}
                </li>
              );
            })
          }
        </ol>
      }
    >
      { children.map(child => child.props.header === currentTab ? child : null) }
    </DialogBase>
  );
}

export { DialogTabs };
