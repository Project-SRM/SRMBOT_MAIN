import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post5 = (props) => {
  const med_courses_post5 = [
    {
      text: "Clinical Psychology ",
      handler: props.actionProvider.med_courses_post5_1,
      id: 1,
    },
    {
      text: "Audiology and Speech Language Pathology",
      handler: props.actionProvider.med_courses_post5_2,
      id: 2,
    },
    
    
  ];

  const buttonsMarkup = med_courses_post5.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post5;