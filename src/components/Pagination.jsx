import React from 'react'

export default function Pagination({currentPage,totalPages,onPageChange}) {
  return (
    <div className='flex justify-center items-center gap-4 mt-6'>
        <button onClick={()=>onPageChange(currentPage-1)}
        disabled={currentPage===1}
        className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50'>Previous
        </button>
        <span className='text-sm font-medium'>
            Page {currentPage} of {totalPages}
        </span>
         <button onClick={()=>onPageChange(currentPage+1)}
        disabled={currentPage===totalPages}
        className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50'>Next
        </button>

    </div>
  )
}
