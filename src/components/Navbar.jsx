import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='bg-white shadow-md w-full '>
        <div className='w-full flex  px-4 py-4 flex justify-between items-center'>
            <Link to="/"  className='text-3xl font-bold text-blue-600'>Job Finder</Link>
 
        <div className="space-x-4 ">
             <Link to="/"  className='text-gray-700 hover:text-indigo-600 font-medium'>Home</Link>
             <Link to='/saved'  className='text-gray-700 hover:text-indigo-600 font-medium'>Saved Jobs</Link>
        </div>
        </div>
    </nav>
  )
}
