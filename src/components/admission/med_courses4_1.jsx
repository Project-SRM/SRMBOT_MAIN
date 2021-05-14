import React from "react";

// import "./AdmissionIndia.css";

const med_courses4_1 = (props) => {
  const med_courses4_1 = [
    {
      text: "Nursing",
      handler: props.actionProvider.med_courses4_11,
      id: 1,
    },
    {
      text: "Physiotherapy",
      handler: props.actionProvider.med_courses4_12,
      id: 2,
    },
    {
      text: "Occupational Therapy",
      handler: props.actionProvider.med_courses4_13,
      id: 3,
    },
    {
      text: "Pharmacy",
      handler: props.actionProvider.med_courses4_14,
      id: 4,
    },
    
    {
      text: "Public Health",
      handler: props.actionProvider.med_courses4_15,
      id: 5,
    },
    
    
    
  ];

  const buttonsMarkup = med_courses4_1.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses4_1;