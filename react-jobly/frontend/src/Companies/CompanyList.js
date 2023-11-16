import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";

/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, SearchForm }
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads companies. */
  const search = async (name) => {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  };
  if (!companies) return <p>Loading</p>;
  return (
    <div className="CompanyList">
      <h1>Companies</h1>

      <SearchForm searchFor={search} />
      {companies.length ? (
        <div className="CompanyList-list">
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          ))}
        </div>
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default CompanyList;
