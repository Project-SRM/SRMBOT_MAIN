import React from "react";

// import "./AdmissionIndia.css";

const med_courses2 = (props) => {
  const med_courses2 = [
    {
      text: "BDS(Bachelor of Dental Surgery)",
      handler: props.actionProvider.med_courses2_1,
      id: 1,
    },
    
    
    
  ];

  const buttonsMarkup = med_courses2.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses2;