import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post4 = (props) => {
  const med_courses_post4 = [
    {
      text: "Nursing",
      handler: props.actionProvider.med_courses_post4_1,
      id: 1,
    },
    {
      text: "Physiotherapy",
      handler: props.actionProvider.med_courses_post4_2,
      id: 2,
    },
    {
      text: "Occupational Therapy",
      handler: props.actionProvider.med_courses_post4_3,
      id: 3,
    },
    {
      text: "Pharmacy",
      handler: props.actionProvider.med_courses_post4_4,
      id: 4,
    },
    
    {
      text: "Public Health",
      handler: props.actionProvider.med_courses_post4_5,
      id: 5,
    },
    
    
    
  ];

  const buttonsMarkup = med_courses_post4.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post4;