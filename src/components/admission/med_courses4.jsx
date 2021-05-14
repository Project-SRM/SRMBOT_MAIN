import React from "react";

// import "./AdmissionIndia.css";

const med_courses4 = (props) => {
  const med_courses4 = [
    {
      text: "Nursing",
      handler: props.actionProvider.med_courses4_1,
      id: 1,
    },
    {
      text: "Physiotherapy",
      handler: props.actionProvider.med_courses4_2,
      id: 2,
    },
    {
      text: "Occupational Therapy",
      handler: props.actionProvider.med_courses4_3,
      id: 3,
    },
    {
      text: "Pharmacy",
      handler: props.actionProvider.med_courses4_4,
      id: 4,
    },
    
    {
      text: "Public Health",
      handler: props.actionProvider.med_courses4_5,
      id: 5,
    },
    
    
    
  ];

  const buttonsMarkup = med_courses4.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses4;