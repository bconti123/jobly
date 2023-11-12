import React from "react";

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>Salary: </p>
          <p>Equity: </p>
          {/* <input type="submit" value={IsApplied ? "Apply" : "Applied"} onClick={"hold"}/> */}
        </div>
      ))}
    </div>
  );
};

export default JobList;
