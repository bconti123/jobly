import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobList from "../Jobs/JobList";

const CompanyDetail = () => {
  const { handle } = useParams();
  console.debug("CompanyDetail", "handle=", handle);

  const [company, setCompany] = useState(null);

  useEffect(() => {
    const getCompany = async () => {
      setCompany(await JoblyApi.getCompany(handle));
    };
    getCompany();
  }, [handle]);

  if (!company) return <p>Loading....</p>;

  return (
    <div className="CompanyDetail">
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      {company.jobs.map((job) => {
        return (
          <JobList
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
          />
        );
      })}
    </div>
  );
};

export default CompanyDetail;
