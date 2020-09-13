import React from 'react';

function DialogBasic ({ onSubmit, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 space-y-4"
      onSubmit={ handleSubmit }
    >
      { children }
    </form>
  );
}

export { DialogBasic };
