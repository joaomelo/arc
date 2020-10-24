import React from 'react';
import { HeaderText } from '../text';

export const HeaderSection = ({ header }) => {
  if (!header) return null;
  return (
    <header>
      {
        typeof header === 'string'
          ? <HeaderText text={header} />
          : header
      }
    </header>
  );
};
