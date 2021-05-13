import React from "react";

// import "./programs.css";

const programs_post = (props) => {
  const programs_post = [
    {
      text: "Engineering",
      handler:props.actionProvider.handleAdmissionIndia,
     
    },
    { text: "Medicine & Health Science", handler:props.actionProvider.med_courses_post,},
    { text: "Management", handler:props.actionProvider.management_courses_post,},
    { text: "Law", handler:props.actionProvider.law_courses_post,},
    { text: "Science & Humanities", handler:props.actionProvider.s_and_h_courses_post,},
    
    
  ];

  const buttonsMarkup = programs_post.map((prog) => (
    <button key={prog.id} onClick={prog.handler} className="option-button">
      {prog.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default programs_post;