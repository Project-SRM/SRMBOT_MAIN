import React from "react";

// import "./AdmissionIndia.css";

const health_sciences = (props) => {
  const health_sciences = [
    {
      text: "Nursing",
      handler: props.actionProvider.health_sciences1,
      id: 1,
    },
    {
      text: "Physiotherapy",
      handler: props.actionProvider.health_sciences2,
      id: 2,
    },
    {
      text: "Occupational Therapy",
      handler: props.actionProvider.health_sciences3,
      id: 3,
    },
    {
      text: "Pharmacy",
      handler: props.actionProvider.health_sciences4,
      id: 4,
    },
    
    {
      text: "Public Health",
      handler: props.actionProvider.health_sciences5,
      id: 5,
    },
    
    
    
  ];

  const buttonsMarkup = health_sciences.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default health_sciences;