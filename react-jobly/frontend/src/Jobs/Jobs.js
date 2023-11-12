import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobList from "./JobList";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await JoblyApi.getJobs();
        setJobs(response)
      } catch (err) {
        console.error(err)
      }
    };
    fetchData();
  }, []);

  if (!jobs) return <p>Loading...</p>;
  return (<div><JobList jobs={jobs} /></div>);
};

export default Jobs;
