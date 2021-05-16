import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post4_5 = (props) => {
  const med_courses_post4_5 = [
    {
      text: "Master of Public Health - MPH",
      handler: props.actionProvider.med_courses_post4_5_1,
      id: 1,
    },
    {
      text: "M.Sc. Biostatistics and Epidemiology",
      handler: props.actionProvider.med_courses_post4_5_2,
      id: 2,
    },
    {
      text: "Master of Health Data Science",
      handler: props.actionProvider.med_courses_post4_5_3,
      id: 3,
    },
    
  ];

  const buttonsMarkup = med_courses_post4_5.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post4_5;