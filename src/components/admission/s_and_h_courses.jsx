import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_courses = (props) => {
  const s_and_h_courses = [
    {
      text: "English",
      handler: props.actionProvider.s_and_h_courses1,
      id: 1,
    },
    {
      text: "Journalism & Mass Communication",
      handler: props.actionProvider.s_and_h_courses2,
      id: 2,
    },
    {
      text: "Visual Communication",
      handler: props.actionProvider.s_and_h_courses3,
      id: 3,
    },
    {
      text: "Commerce",
      handler: props.actionProvider.s_and_h_courses4,
      id: 3,
    },
    {
      text: "Corporate Secretary And Accounting & Finance",
      handler: props.actionProvider.s_and_h_courses5,
      id: 3,
    },
    {
      text: "Education",
      handler: props.actionProvider.s_and_h_courses6,
      id: 3,
    },
    {
      text: "Bio-Technology",
      handler: props.actionProvider.s_and_h_courses7,
      id: 3,
    },
    {
      text: "Basic Sciences",
      handler: props.actionProvider.s_and_h_courses8,
      id: 3,
    },
    {
      text: "Computer Science",
      handler: props.actionProvider.s_and_h_courses9,
      id: 3,
    },
    {
      text: "Fashion Designing",
      handler: props.actionProvider.s_and_h_courses10,
      id: 3,
    },
    {
      text: "Physical Education",
      handler: props.actionProvider.s_and_h_courses11,
      id: 3,
    },
    {
      text: "Sociology",
      handler: props.actionProvider.s_and_h_courses12,
      id: 3,
    },
    {
      text: "Psychology",
      handler: props.actionProvider.s_and_h_courses13,
      id: 3,
    },
    {
      text: "Defence",
      handler: props.actionProvider.s_and_h_courses14,
      id: 3,
    },
    
    
    
    
  ];

  const buttonsMarkup = s_and_h_courses.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_courses;