import React from 'react';

function DialogBasic ({ onSubmit, title, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      onSubmit={ handleSubmit }
      noValidate
      css={{
        padding: '8px',
        border: '1px solid',
        '> *': {
          marginTop: '8px'
        }
      }}
    >
      {title && <h2>{title}</h2>}
      { children }
    </form>
  );
}

export { DialogBasic };
