import React from 'react';

function DialogBasic ({ onSubmit, title, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      onSubmit={ handleSubmit }
      css={{
        padding: '8px',
        border: '1px solid',
        '> *': {
          marginTop: '8px'
        }
      }}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 space-y-4"
    >
      {title && <h2>{title}</h2>}
      { children }
    </form>
  );
}

export { DialogBasic };
