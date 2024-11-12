import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
  const jobs = useLoaderData(); // Load jobs data
  const { id } = useParams();
  const jobId = parseInt(id);
  const job = jobs.properties.find((job) => job.id === jobId);

  if (!job) return <p>Job not found</p>;

  return (
    <div>
      <h1>Property Details for ID: {id}</h1>
      <div className="card card-compact bg-base-100 shadow-xl p-4">
        <figure>
          <img src={job.image} alt={job.estate_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job.estate_title}</h2>
          <p>{job.description}</p>
          <p>Price: {job.price}</p>
          <p>Location: {job.location}</p>
          <p>Facilities: {job.facilities.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
