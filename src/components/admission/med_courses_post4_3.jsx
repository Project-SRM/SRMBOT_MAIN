import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post4_3 = (props) => {
  const med_courses_post4_3 = [
    {
      text: "Master of Occupational Therapy",
      handler: props.actionProvider.med_courses_post4_3_1,
      id: 1,
    },
    
  ];

  const buttonsMarkup = med_courses_post4_3.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post4_3;