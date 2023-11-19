import React, { useCallback, useContext, useEffect, useState } from "react";
import UserContext from "../Users/UserContext";
import JoblyApi from "../api";

const JobList = ({ id, title, salary, equity, companyName }) => {
  const { username } = useContext(UserContext);
  const [applicationsIds, setApplicationsIds] = useState(new Set([]));

  const hasAppliedToJob = useCallback(
    (id) => {
      return applicationsIds.has(id);
    },
    [applicationsIds]
  );

  const [applied, setApplied] = useState(hasAppliedToJob(id));

  // const applyToJob = (id) => {
  //   if (hasAppliedToJob(id)) return;
  //   JoblyApi.applyToJob(username, id);
  //   setApplicationsIds(new Set([...applicationsIds, id]));
  //   setApplied(true);
  // };

  const applyToJob = async (id) => {
    if (hasAppliedToJob(id)) return;
    try {
      const response = await JoblyApi.applyToJob(username, id);
      console.log("applyToJob response:", response);
      if (response.applied) {
        setApplicationsIds((prevIds) => {
          const newIds = new Set([...prevIds, id]);
          console.log("New application IDs:", newIds);
          return newIds;
        });
        console.log(applicationsIds);
        setApplied(true);
      } else {
        console.error("Error applying to job:", response);
        setApplied(true);
      }
    } catch (error) {
      console.error("Error applying to job:", error);
      setApplied(true);
    }
  };

  useEffect(() => {
    setApplied((prevApplied) => prevApplied || hasAppliedToJob(id));
  }, [id, hasAppliedToJob]);

  const handleApply = async () => {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
  };

  return (
    <li>
      <div key={id}>
        <h3>{title}</h3>
        {companyName && <p>Company: {companyName}</p>}
        <p>Salary: {salary === null ? "N/A" : salary} </p>
        <p>Equity: {equity === null ? "N/A" : equity}</p>
        <button type="button" onClick={handleApply} disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </li>
  );
};

export default JobList;
