import React, { useState } from 'react';
// import { theme } from '__cli/core/design';

function DialogTabs ({ children }) {
  const [currentTab, setCurrentTab] = useState(children[0].props.label);

  return (
    <div>
      <ol
        css={{
          listStyle: 'none',
          display: 'grid',
          gridTemplateColumns: `repeat(${children.length}, 1fr)`
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
                  textAlign: 'center'
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
