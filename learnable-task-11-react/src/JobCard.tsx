import React, { useState } from "react" ;
import { job } from  "./jobs" ;

interface jobCardProps {
    job: job;
}

const jobCard: React.FC<jobCardProps> = ({ job }) => {
    const [showDetails, setShowDetails] = useState(false);
  
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
          {showDetails && <p>Salary: {job.salary}</p>}
        </div>
      );
    };
    
    export default jobCard;

    