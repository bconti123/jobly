import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobList from "./JobList";
import SearchForm from "../common/SearchForm";
import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await JoblyApi.getJobs();
        setJobs(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const search = async (name) => {
    let jobs = await JoblyApi.getJobsByTitle(name);
    setJobs(jobs);
  };

  if (!jobs) return <p>Loading...</p>;
  return (
    <div className="Jobs">
      <h1>Jobs</h1>
      <SearchForm searchFor={search} />
      <ul>
        {jobs.map((job) => (
          <JobList
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            companyName={job.companyName}
          />
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
