import React from "react";

// import "./AdmissionIndia.css";

const management_courses = (props) => {
  const management_courses = [
    {
      text: "B.B.A. - Business Administration",
      handler: props.actionProvider.management_courses1,
      id: 1,
    },
    {
      text: "B.B.A. (Hons.)- Business Administration",
      handler: props.actionProvider.management_courses2,
      id: 2,
    },
    {
      text: "Rural Management",
      handler: props.actionProvider.management_courses3,
      id: 3,
    },
    {
      text: "Digital Marketing",
      handler: props.actionProvider.management_courses4,
      id: 3,
    },
    
    
    
    
  ];

  const buttonsMarkup = management_courses.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default management_courses;