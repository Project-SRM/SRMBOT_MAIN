import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post1_1 = (props) => {
  const med_courses_post1_1 = [
    {
      text: "Anatomy",
      handler: props.actionProvider.med_courses_post1_1_1,
      id: 1,
    },
    {
      text: "Physiology",
      handler: props.actionProvider.med_courses_post1_1_2,
      id: 2,
    },
    {
      text: "Biochemistry",
      handler: props.actionProvider.med_courses_post1_1_3,
      id: 3,
    },
    {
      text: "Pharmacology",
      handler: props.actionProvider.med_courses_post1_1_4,     
      id: 4,
    },
    
    {
      text: "Pathology",
      handler: props.actionProvider.med_courses_post1_1_5,
      id: 5,
    },
    {
      text: "Microbiology",
      handler: props.actionProvider.med_courses_post1_1_6,     
      id: 6,
    },
    
    {
      text: "Community Medicine",
      handler: props.actionProvider.med_courses_post1_1_7,
      id: 7,
    },
    
    
    
  ];

  const buttonsMarkup = med_courses_post1_1.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post1_1;