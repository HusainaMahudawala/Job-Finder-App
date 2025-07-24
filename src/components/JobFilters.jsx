import React from 'react'

export default function JobFilters({searchTerm,setSearchTerm,categories,selectedCategory,setSelectedCategory}) {
  return (
    <div className='flex flex-col sm:flex-row sm:items-center gap-4 mb-6'>
        <input type="text" placeholder='Search job titles or companies...' value={searchTerm} onChange={(e)=>
            setSearchTerm(e.target.value)} className='w-full sm:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400'/>
        <select value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)} className='w-full sm:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400'>
            <option value="">All Categories</option>
            {categories.map((category,i)=>(
                <option key={i} value={category}>{category}</option>
            ))}
            </select>
    </div>
  )
}
