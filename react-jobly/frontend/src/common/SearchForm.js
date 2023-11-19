import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ searchFor }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    searchFor(searchTerm);
    setSearchTerm(searchTerm.trim());
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
