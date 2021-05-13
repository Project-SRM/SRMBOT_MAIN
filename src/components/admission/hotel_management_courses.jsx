import React from "react";

// import "./AdmissionIndia.css";

const hotel_management_courses = (props) => {
  const hotel_management_courses = [
    {
      text: "Diploma in Hotel Management",
      handler: props.actionProvider.hotel_management_courses1,
      id: 1,
    },
    {
      text: "B.Sc. In Hotel & Catering Management",
      handler: props.actionProvider.hotel_management_courses2,
      id: 2,
    },
    
    
    
    
  ];

  const buttonsMarkup = hotel_management_courses.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default hotel_management_courses;