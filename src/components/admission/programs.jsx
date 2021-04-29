import React from "react";

// import "./programs.css";

const programs = (props) => {
  const programs = [
    {
      text: "Engineering",
      handler:props.actionProvider.handleAdmissionIndia,
     
    },
    { text: "Medicine & Health Science", handler:props.actionProvider.academics,},
    { text: "Management", handler:props.actionProvider.academics,},
    { text: "Law", handler:props.actionProvider.academics,},
    { text: "Science & Humanities", handler:props.actionProvider.academics,},
    { text: "Others", handler:props.actionProvider.academics,},
    
  ];

  const buttonsMarkup = programs.map((prog) => (
    <button key={prog.id} onClick={prog.handler} className="option-button">
      {prog.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default programs;