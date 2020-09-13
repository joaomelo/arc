import React from 'react';

function PrimaryButton ({ label }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="submit"
    >
      { label }
    </button>
  );
}

export { PrimaryButton };
