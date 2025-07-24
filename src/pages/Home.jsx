import axios from 'axios';
import React, { useEffect, useState } from 'react'
import JobCard from '../components/JobCard'
import JobFilters from '../components/JobFilters'
import Pagination from '../components/Pagination';

export default function Home() {

  const [jobs,setJobs]=useState([]);//to store the list of jobs from APIS
  const [loading,setLoading]=useState(true);
  const [searchTerm,setSearchTerm]=useState("");
  const [selectedCategory,setSelectedCategory]=useState("");
  const [filteredJobs,setFilteredJobs]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const jobsperpage=9;
  const indexoflastjob=currentPage * jobsperpage;
  const indexoffirstjob=indexoflastjob-jobsperpage;
  const fetchjobs=async()=>{
    try{
        const res=await axios.get("https://remotive.com/api/remote-jobs")
        console.log(res.data.jobs)
        setJobs(res.data.jobs);
        setFilteredJobs(res.data.jobs);
        setLoading(false);
    }
    catch(err){
      console.error("Error Fetching jobs:",err);
    }
  };
  useEffect(()=>{
    fetchjobs();
  },[])
  useEffect(()=>{
    let filtered=jobs;
    if(searchTerm){
      filtered=filtered.filter(job=>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.company_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
      if(selectedCategory)
      {
        filtered=filtered.filter(job=>job.category===selectedCategory)
      }
      setFilteredJobs(filtered);
  },[searchTerm,selectedCategory,jobs])
  const categories=[...new Set(jobs.map(job=>job.category))]
  const jobstodisplay=filteredJobs.length>0? filteredJobs:jobs;
    const currentJobs=jobstodisplay.slice(indexoffirstjob,indexoflastjob);

  return (
    <div className='p-4'>
      <JobFilters 
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
      <h1 className='text-xl font-semibold mb-4 text-blue-500 '>Remote Job Listing</h1>
    {loading ? (<p>Loading Jobs....</p>):(
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {currentJobs.length>0 ?(currentJobs.map(job=>
          <JobCard key={job.id} job={job} />)):(<p>No jobs found for your search.</p>)}
       
      </div>
    )}
    <Pagination currentPage={currentPage}
    totalJobs={filteredJobs.length}
    jobsperpage={jobsperpage}
    onPageChange={(page)=>setCurrentPage(page)}/>

    
    </div>
  );
};