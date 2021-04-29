import React from "react";

// import "./tutionfees.css";

const bio = (props) => {
  const bio = [
    {
      text: "Biomedical Engineering (BME)",
      handler:props.actionProvider.bio1,
      id: 1,
    },
    {
      text: "Biotechnology",
      handler:props.actionProvider.bio2,
      id: 2,
    },
    {
      text: "Biotechnology W/S in Genetic Engineering",
      handler:props.actionProvider.bio3,
      id: 3,
    },
    {
      text: "Biotechnology W/S in Regenerative Medicine",
      handler:props.actionProvider.bio4,
      id: 4,
    },
    {
      text: "Biotechnology with specialization in Cancer Genetics",
      handler:props.actionProvider.bio5,
      id: 5,
    },
    {
      text: "Chemical Engineering",
      handler:props.actionProvider.bio6,
      id: 6,
    },
    
    
  ];

  const buttonsMarkup = bio.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default bio;