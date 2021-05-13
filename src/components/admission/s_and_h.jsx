import React from "react";

// import "./AdmissionIndia.css";

const s_and_h = (props) => {
  const s_and_h = [
    {
      text: "Courses Offered",
      handler: props.actionProvider.s_and_h_courses,
      id: 1,
    },
    
    {
      text: "Eligibility",
      handler: props.actionProvider.handleeligibility,
      id: 2,
    },
    
   
    
    {
      text: "Fee Details",
      handler: props.actionProvider.fees,
      id: 3,
    }
    
    
    
    
  ];

  const buttonsMarkup = s_and_h.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h;