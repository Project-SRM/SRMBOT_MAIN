import React from "react";

// import "./AdmissionIndia.css";

const med_courses = (props) => {
  const med_courses = [
    {
      text: "Cardiology",
      handler: props.actionProvider.med_courses1_3_1,
      id: 1,
    },
    {
      text: "Nephrology",
      handler: props.actionProvider.med_courses1_3_2,
      id: 2,
    },
    {
      text: "Neurology",
      handler: props.actionProvider.med_courses1_3_3,
      id: 3,
    },
    {
      text: "Cardio Vascular & Thoracic Surgery",
      handler: props.actionProvider.med_courses1_3_4,     
      id: 4,
    },
    
    {
      text: "Neurosurgery",
      handler: props.actionProvider.med_courses1_3_5,
      id: 5,
    },
    {
      text: "Plastic & Reconstructive Surgery",
      handler: props.actionProvider.med_courses1_3_6,
      id: 6,
    },
    {
      text: "Paediatric Surgery",
      handler: props.actionProvider.med_courses1_3_7,
      id: 7,
    },
    {
      text: "Urology",
      handler: props.actionProvider.med_courses1_3_8,
      id: 8,
    },
    
    
    
  ];

  const buttonsMarkup = med_courses.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses;