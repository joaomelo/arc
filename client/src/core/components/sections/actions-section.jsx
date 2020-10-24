import React from 'react';
import { spaces } from '__cli/core/design';
import { Divider } from '../shapes';

export const ActionsSection = ({ actions }) => {
  if (!actions) return null;

  return (
    <>
      <Divider />
      <footer css={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: spaces.breathable
      }}>
        { actions }
      </footer>
    </>
  );
};
