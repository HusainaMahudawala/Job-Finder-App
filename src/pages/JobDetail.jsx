import axios from 'axios';
import  parse  from 'html-react-parser';
import React, { useEffect, useState } from 'react'
import {Bookmark} from"lucide-react"
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

export default function JobDetail() {
    const {id}=useParams(); //get job id from url
    const navigate=useNavigate();
    const [job,setjobs]=useState([]);
    useEffect(()=>{
        axios.get("https://remotive.com/api/remote-jobs")
        .then(res=> {
          const alljobs=res.data.jobs;
          const job=alljobs.find(j=>j.id.toString()==id);
          setjobs(job);
        })
    },[])
   if(job.length===0){
    return(
      <div className='text-center mt-10 text-blue-600 text-lg font-medium'>Loading jobs</div>
    )
   }
    if(!job){
        return <div className='text-center text-red-500 mt-10'>Job not found.</div>
    }
    const handleSaveJob=(job)=>{
      let savedJobs=JSON.parse(localStorage.getItem("savedJobs")) || [];
      const alreadySaved=savedJobs.find((j)=>j.id===job.id);
      if(!alreadySaved){
        savedJobs.push(job);
        localStorage.setItem("savedJobs",JSON.stringify(savedJobs));
        toast.success("Job saved successfully!");
      }
      else{
        toast.warn("Job already saved!");

      }

    };
  return (
    <div className='max-w-3xl mx-auto px-6'>
      <button onClick={()=>navigate(-1)} className='mb-4 mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>←Go back</button>
      <div className='bg-white shadow-md rounded-lg p-6 border border-gray-200'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold text-blue-800 mb-4'>{job.title}</h2>
        <button onClick={()=>handleSaveJob(job)} className='flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition'>
          <Bookmark className='w-5 h-5'/>Save Job</button></div>
        <div className='space-y-2 text-gray-700'>
        <p><span className='font-semibold'>Company: </span>{job.company_name}</p>
        <p><span className='font-semibold'>Location: </span>{job.candidate_required_location}</p>
        <p><span className='font-semibold'>Type: </span>{job.job_type}</p>
        <p><span className='font-semibold'>Salary: </span>{job.salary || 'Not Specified'}</p>
        </div>

          <div className='mt-6'><h3 className='text-xl font-semibold text-gray-800 mb-2'>Job Description</h3>
          <p className='text-gray-600 space-y-1 leading-relaxed'>{parse(job.description)}</p></div>
          </div>
          <ToastContainer/>
          </div>

  )
}
