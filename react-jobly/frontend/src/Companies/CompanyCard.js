import React from "react";
import { Link } from "react-router-dom";


const CompanyCard = ({ name, description, logoUrl, handle }) => {
    return (
        <div>
          <Link to={`/companies/${handle}`}>
          <h3>{name}</h3>
          <p>{description}</p>
          {logoUrl && <img src={logoUrl} alt={handle} />}
          </Link> 
        </div>
    )
}

export default CompanyCard;