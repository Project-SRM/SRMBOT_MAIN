import React from "react";

// import "./tutionfees.css";

const eee = (props) => {
  const eee = [
    {
      text: "Electrical and Electronics Engineering",
      handler:props.actionProvider.eee1,
      id: 1,
    },
    {
      text: "Electrical and Electronics Engineering w/s E-Mobility",
      handler:props.actionProvider.eee2,
      id: 2,
    },
    {
      text: "Electrical and Electronics Engineering w/s Smart Grid",
      handler:props.actionProvider.eee3,
      id: 3,
    },
    {
      text: "Electrical and Electronics Engineering w/s Energy Efficient Systems",
      handler:props.actionProvider.eee4,
      id: 4,
    },
    {
      text: "Electrical and Computer Engineering",
      handler:props.actionProvider.eee5,
      id: 5,
    },
    {
      text: "Electronics and Communication Engineering",
      handler:props.actionProvider.eee6,
      id: 6,
    },
    {
      text: "Electronics and Computer Engineering",
      handler:props.actionProvider.eee7,
      id: 7,
    },
    {
      text: "ECE W/S in Cyber Physical Systems",
      handler:props.actionProvider.eee8,
      id: 8,
    },
    {
      text: "ECE W/S in Data Science",
      handler:props.actionProvider.eee9,
      id: 9,
    },
    {
      text: "Electronics and Communication Engineering w/s VLSI & Embedded Systems",
      handler:props.actionProvider.eee10,
      id: 10,
    },
    {
      text: "Electronics and Communication Engineering w/s Advanced Communication Systems",
      handler:props.actionProvider.eee11,
      id: 11,
    },
    {
      text: "Electronics and Communication Engineering w/s Signal/Image Processing using AI",
      handler:props.actionProvider.eee12,
      id: 12,
    },
    {
      text: "Electronics and Instrumentation Engineering",
      handler:props.actionProvider.eee13,
      id: 13,
    },
    
    
    

    
    
  ];

  const buttonsMarkup = eee.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default eee;