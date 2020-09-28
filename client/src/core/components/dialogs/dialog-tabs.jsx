import React, { useState } from 'react';
import { theme } from '__cli/core/design';

function DialogTabs ({ children }) {
  const [currentTab, setCurrentTab] = useState(children[0].props.label);
  return (
    <div
      css={{
        borderRadius: theme.space.s3,
        backgroundColor: theme.colors.primary,
        overflow: 'hidden'
      }}
    >
      <ol
        css={{
          display: 'grid',
          gridTemplateColumns: `repeat(${children.length}, 1fr)`,
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
                  padding: theme.space.s3,
                  backgroundColor: label === currentTab ? theme.colors.secondary : theme.colors.dark,
                  color: label === currentTab ? theme.colors.primary : theme.colors.light,
                  fontWeight: label === currentTab ? theme.weight.w3 : theme.weight.w2,
                  ':hover': {
                    backgroundColor: theme.colors.accent
                  }
                }}
              >
                {label}
              </li>
            );
          })
        }
      </ol>
      <div>
        {
          children.map(child => child.props.label === currentTab ? child : null)
        }
      </div>
    </div>
  );
}

export { DialogTabs };
