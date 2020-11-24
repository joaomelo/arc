import React, { Children, useState } from 'react';
import { weights, spaces, colors } from '@/core/design';
import { Card } from './card';

export const NavTab = ({ label, current, setCurrent }) => (
  <li
    onClick={e => setCurrent(label)}
    css={{
      textAlign: 'center',
      padding: spaces.breathable,
      backgroundColor: label === current ? colors.secondary : colors.dark,
      color: label === current ? colors.primary : colors.light,
      fontWeight: label === current ? weights.bolder : weights.bold,
      ':hover': {
        backgroundColor: colors.accent
      }
    }}
  >
    {label}
  </li>
);

export const NavTabs = ({ labels, ...rest }) => (
  <ol
    css={{
      display: 'grid',
      gridTemplateColumns: `repeat(${labels.length}, minmax(max-content, 1fr))`,
      listStyle: 'none',
      cursor: 'pointer'
    }}
  >
    {labels.map(label => <NavTab key={label} label={label} {...rest}/>)}
  </ol>
);

export const DialogTabs = ({ children }) => {
  const childrenArray = Children.toArray(children);
  const labels = childrenArray.map(child => child.props.header);
  const [currentTab, setCurrentTab] = useState(labels[0]);

  return (
    <Card
      header={
        <NavTabs
          labels={labels}
          current={currentTab}
          setCurrent={setCurrentTab}
        />
      }
    >
      { childrenArray.find(child => child.props.header === currentTab) }
    </Card>
  );
};
