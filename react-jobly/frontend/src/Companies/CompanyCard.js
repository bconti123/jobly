

const CompanyCard = ({ name, description, logoUrl, handle }) => {
    return (
        <div>
          <h3>{name}</h3>
          <p>{description}</p>  
        </div>
    )
}

export default CompanyCard;