import React from "react";

// import "./AdmissionIndia.css";

const management = (props) => {
  const management = [
    {
      text: "Courses Offered",
      handler: props.actionProvider.course,
      id: 1,
    },
    
    {
      text: "Eligibility",
      handler: props.actionProvider.handleeligibility,
      id: 3,
    },
    
   
    
    {
      text: "Fee Details",
      handler: props.actionProvider.fees,
      id: 5,
    },
    
    
    
    
  ];

  const buttonsMarkup = management.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default management;