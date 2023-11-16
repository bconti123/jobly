import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobList from "./JobList";
import SearchForm from "../common/SearchForm";

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
    <div>
      <h1>Jobs</h1>
      <SearchForm searchFor={search} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default Jobs;
