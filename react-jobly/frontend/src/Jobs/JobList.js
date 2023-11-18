import React from "react";

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          {job.companyName && <p>Company: {job.companyName}</p>}
          <p>Salary: {job.salary === null ? "N/A" : job.salary} </p>
          <p>Equity: {job.equity === null ? "N/A" : job.equity}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
