import React, { useState } from 'react';
import { weights, spaces, colors } from '__cli/core/design';
import { DialogBase } from './dialog-base';

function DialogTabs ({ children }) {
  const [currentTab, setCurrentTab] = useState(children[0].props.label);
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
              const { label } = child.props;
              return (
                <li
                  key={label}
                  label={label}
                  onClick={e => setCurrentTab(label)}
                  css={{
                    textAlign: 'center',
                    padding: spaces.sp3,
                    backgroundColor: label === currentTab ? colors.secondary : colors.dark,
                    color: label === currentTab ? colors.primary : colors.light,
                    fontWeight: label === currentTab ? weights.bolder : weights.bold,
                    ':hover': {
                      backgroundColor: colors.accent
                    }
                  }}
                >
                  {label}
                </li>
              );
            })
          }
        </ol>
      }
    >
      { children.map(child => child.props.label === currentTab ? child : null) }
    </DialogBase>
  );
}

export { DialogTabs };
