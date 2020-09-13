import React, { ReactNode, FormEventHandler, FormEvent } from 'react';

interface Props {
  onSubmit: FormEventHandler, 
  children: ReactNode
}

function DialogBasic({ onSubmit, children }: Props){

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  }

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 space-y-4"
      onSubmit={handleSubmit}  
    >
      { children }
    </form>
  )
}

export { DialogBasic }