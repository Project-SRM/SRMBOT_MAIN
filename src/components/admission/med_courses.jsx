import React from "react";

// import "./AdmissionIndia.css";

const med_courses = (props) => {
  const med_courses = [
    {
      text: "SRM Medical College Hospital and Research Centre ",
      handler: props.actionProvider.med_courses1,
      id: 1,
    },
    {
      text: "SRM Kattankulathur Dental College and Hospital",
      handler: props.actionProvider.med_courses2,
      id: 2,
    },
    {
      text: "SRM Ramapuram Dental College ",
      handler: props.actionProvider.med_courses3,
      id: 3,
    },
    {
      text: "Health Sciences ",
      handler: props.actionProvider.med_courses4,     
      id: 4,
    },
    
    {
      text: "Other Courses Offered ",
      handler: props.actionProvider.med_courses5,
      id: 5,
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