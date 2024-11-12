import { useEffect, useState } from "react";
import Job from "../Job/Job"; 

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/jobs.json') 
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.properties)) {
          setJobs(data.properties);
        } else {
          console.error("Expected data.properties to be an array");
        }
      })
      .catch(error => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {jobs.map(job => <Job key={job.id} job={job} />)}
      </div>
    </div>
  );
};

export default FeaturedJobs;
