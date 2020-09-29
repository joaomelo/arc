import React, { useState } from 'react';
import { theme, colors } from '__cli/core/design';

function DialogTabs ({ children }) {
  const [currentTab, setCurrentTab] = useState(children[0].props.label);
  return (
    <div
      css={{
        borderRadius: theme.space.s3,
        backgroundColor: colors.primary,
        overflow: 'hidden'
      }}
    >
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
                  padding: theme.space.s3,
                  backgroundColor: label === currentTab ? colors.secondary : colors.dark,
                  color: label === currentTab ? colors.primary : colors.light,
                  fontWeight: label === currentTab ? theme.weight.w3 : theme.weight.w2,
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
      <div>
        {
          children.map(child => child.props.label === currentTab ? child : null)
        }
      </div>
    </div>
  );
}

export { DialogTabs };
