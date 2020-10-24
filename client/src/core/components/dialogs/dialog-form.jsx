import React from 'react';
import { spaces } from '__cli/core/design';
import { MessageMulti } from '../text';
import { DialogBase } from './dialog-base';

export const DialogForm = ({ onSubmit, error, success, children, ...rest }) => {
  const { breathable, spacious } = spaces;

  const handleSubmit = e => {
    e.preventDefault();
    if (!e.target.checkValidity()) return;
    onSubmit(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
    >
      <DialogBase {...rest}>
        <div css={{
          padding: `${spacious} ${breathable}`,
          '> * + *': { marginTop: breathable }
        }}>
          { children }
          <MessageMulti
            error={error}
            info={success}
            css={{ marginTop: spacious }}
          />
        </div>
      </DialogBase>
    </form>
  );
};
