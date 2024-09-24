import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const {page, handlePageChange, totalPages} = useContext(AppContext);

  if(!totalPages) return null;
  
  return (
    <div className="fixed bottom-0 bg-white py-1 border-t-2 border-gray-300 w-full inset-x-0 shadow-md">
      <div className="flex gap-x-3 items-center w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            className="rounded-md border-gray-300 border-2 px-4 py-1"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
        )}

        {page < totalPages && (
          <button
            className="rounded-md border-gray-300 border-2 px-4 py-1"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}
        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
