import React from "react";

const JobList = ({ jobs }) => {
  return (
    <div>
        {jobs.map(job => (
            <h3>{job.title}</h3>
        ))}
    </div>
  );
};

export default JobList;
