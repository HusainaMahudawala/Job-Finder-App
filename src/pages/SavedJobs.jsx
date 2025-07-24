import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

export default function SavedJobs() {
    const [savedJobs,setSavedJobs]=useState([])
    useEffect(()=>{
        const jobs=JSON.parse(localStorage.getItem("savedJobs")) || [];
        setSavedJobs(jobs);
    },[]);
    const handleRemove=(jobId)=>{
        const updatedJobs=savedJobs.filter((job)=>
            job.id !== jobId);
        localStorage.setItem("savedJobs",JSON.stringify(updatedJobs));
        setSavedJobs(updatedJobs);
        toast.success("Job removed!");
    }
  return (
    <div className=' min-h-screen bg-gray-50 p-6'>
        <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold text-blue-700 mb-6'>Saved Jobs</h2>
            {savedJobs.length===0 ? (<p className='text-gray-500'>You have no saved jobs.</p>):
            (<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>{savedJobs.map((job,index)=>(
                <div key={index} className='bg-white rounded-2xl shadow-md p-5 border hover:shadow-lg transition duration-200'>
                    <h3 className='text-xl font-semibold text-blue-600 hover:underline cursor-pointer'>{job.title}</h3>
                    <p className='text-gray-600 mt-1'>{job.company_name}</p>
                    <p className='text-sm text-gray-400 mt-2'>{job.candidate_required_location}</p>
                    <button onClick={()=>handleRemove(job.id)} className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'>
                      Remove 
                    </button>
                    </div>
            ))}
            </div>
        )}
        </div> 
        <ToastContainer/>
    </div>
    
  )
}
