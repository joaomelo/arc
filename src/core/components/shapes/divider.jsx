import React from 'react';
import { spaces, colors } from '@/core/design';

export const Divider = props => (
  <hr
    css={{
      borderTop: `${spaces.tight} solid ${colors.light}`
    }}
    {...props}
  />
);
