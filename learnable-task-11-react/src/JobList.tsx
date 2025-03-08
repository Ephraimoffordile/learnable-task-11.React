import React from "react";
import JobCard from "./JobCard"; 
import { jobs } from "./jobs";

const JobList: React.FC = () => {
  return (
    <div>
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />) // Corrected usage
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;