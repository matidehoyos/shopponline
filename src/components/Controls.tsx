import React from 'react';

interface ControlsProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

const Controls: React.FC<ControlsProps> = ({ 
  currentPage, 
  itemsPerPage, 
  totalItems, 
  handlePreviousPage, 
  handleNextPage 
}) => {
  return (
    <div>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 0}
        className='px-3 py-2 bg-red-500 text-white font-extrabold border-2 border-red-200 rounded-full disabled:opacity-20 hover:bg-red-600  transition-all duration-700'
      >
        ←
      </button>
      <button
        onClick={handleNextPage}
        disabled={(currentPage + 1) * itemsPerPage >= totalItems}
        className='ml-1 px-3 py-2 bg-red-500 text-white font-extrabold border-2 border-red-200 rounded-full disabled:opacity-20 hover:bg-red-600 transition-all duration-300'
      >
        →
      </button>
    </div>
  );
};

export default Controls;
