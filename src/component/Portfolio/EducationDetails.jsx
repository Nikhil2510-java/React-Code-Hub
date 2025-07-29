const EducationDetails = (prop) => {
    return (
        <div className="education-details">
            <h3>{prop.duration}</h3>
            <h4>{prop.degree}</h4>
            <p>{prop.institution}<br /> {prop.percentage}</p>
        </div>
    );
}

export default EducationDetails;