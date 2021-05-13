import React from "react";

// import "./programs.css";

const programs = (props) => {
  const programs = [
    {
      text: "Engineering",
      handler:props.actionProvider.handleAdmissionIndia,
     
    },
    { text: "Medicine & Health Science", handler:props.actionProvider.med_courses,},
    { text: "Management", handler:props.actionProvider.management_courses,},
    { text: "Law", handler:props.actionProvider.law_courses,},
    { text: "Science & Humanities", handler:props.actionProvider.s_and_h_courses,},
    { text: "Hotel Management", handler:props.actionProvider.hotel_management_courses,},
    
  ];

  const buttonsMarkup = programs.map((prog) => (
    <button key={prog.id} onClick={prog.handler} className="option-button">
      {prog.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default programs;