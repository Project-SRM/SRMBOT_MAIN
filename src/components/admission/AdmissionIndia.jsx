import React from "react";

// import "./AdmissionIndia.css";

const AdmissionIndia = (props) => {
  const AdmissionIndia = [
    {
      text: "Courses Offered",
      handler: props.actionProvider.course,
      id: 1,
    },
    {
      text: "Application",
      handler: props.actionProvider.handleapplication,
      id: 2,
    },
    {
      text: "Eligibility",
      handler: props.actionProvider.handleeligibility,
      id: 3,
    },
    {
      text: "Counselling",
      handler: props.actionProvider.handlecounselling,
      id: 4,
    },
   
    
    {
      text: "Fee Details",
      handler: props.actionProvider.fees,
      id: 5,
    },
    {
      text: "Placements",
      handler: props.actionProvider.placement,
      id: 5,
    }
    
    
    
  ];

  const buttonsMarkup = AdmissionIndia.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default AdmissionIndia;