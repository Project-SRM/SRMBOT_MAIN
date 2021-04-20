import React from "react";

// import "./programs.css";

const programs = (props) => {
  const programs = [
    {
      text: "Engineering",
      handler:props.actionProvider.handleAdmissionIndia,
      id: 1,
    },
    { text: "Medicine & Health Science", handler: () => {}, id: 2 },
    { text: "Management", handler: () => {}, id: 3 },
    { text: "Law", handler: () => {}, id: 4 },
    { text: "Science & Humanities", handler: () => {}, id: 5 },
    { text: "Architechture & Design", handler: () => {}, id: 6 },
    { text: "Others", handler: () => {}, id: 7 },
    
  ];

  const buttonsMarkup = programs.map((prog) => (
    <button key={prog.id} onClick={prog.handler} className="option-button">
      {prog.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default programs;