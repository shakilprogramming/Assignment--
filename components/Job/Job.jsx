import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  const { id,image, estate_title, price, location, description, facilities } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={estate_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        
        
        <div className="card-actions justify-center">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary ">View Property</button>

            </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
