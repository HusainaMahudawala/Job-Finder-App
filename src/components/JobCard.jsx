import React from "react";
import { Link } from "react-router-dom";
export default function JobCard({job})
{
    return (
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-sm text-gray-600 mb-2">Company Name: {job.company_name}</p>
             <p className="text-sm  mb-2">Category: {job.category}</p>
             <p className="text-sm mb-2">Location: {job.candidate_required_location}</p>
             <p className="text-sm mb-2">Type: {job.job_type}</p>
             <p className="text-sm mb-2">Salary: {job.salary}</p>
        
           
             <Link to={'/job/'+job.id}className="text-blue-500 hover:underline mt-2 inline-block">
                View Job Details
             </Link>   
        </div>
    )
};

