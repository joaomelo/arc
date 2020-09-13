import React from 'react';

function PrimaryButton(props: { label: string }) {
  return (
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="submit"
    >
      { props.label }
    </button>    
  )
}

export { PrimaryButton }