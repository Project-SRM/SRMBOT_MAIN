import React from "react";

// import "./AdmissionIndia.css";

const med_courses5 = (props) => {
  const med_courses5 = [
    {
      text: "Optometry",
      handler: props.actionProvider.med_courses5_1,
      id: 1,
    },
    {
      text: "Audiology And Speech Language Pathology",
      handler: props.actionProvider.med_courses5_2,
      id: 2,
    },
    
    
  ];

  const buttonsMarkup = med_courses5.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses5;