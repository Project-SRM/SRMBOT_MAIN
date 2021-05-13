import React from "react";

// import "./tutionfees.css";

const eee = (props) => {
  const eee = [
    {
      text: "1.Electrical and Electronics Engineering",
      handler:props.actionProvider.eee1,
      id: 1,
    },
    {
      text: "2.Electrical and Electronics Engineering w/s E-Mobility",
      handler:props.actionProvider.eee2,
      id: 2,
    },
    {
      text: "3.Electrical and Electronics Engineering w/s Smart Grid",
      handler:props.actionProvider.eee3,
      id: 3,
    },
    {
      text: "4.Electrical and Electronics Engineering w/s Energy Efficient Systems",
      handler:props.actionProvider.eee4,
      id: 4,
    },
    {
      text: "5.Electrical and Computer Engineering",
      handler:props.actionProvider.eee5,
      id: 5,
    },
    {
      text: "6.Electronics and Communication Engineering",
      handler:props.actionProvider.eee6,
      id: 6,
    },
    {
      text: "7.Electronics and Computer Engineering",
      handler:props.actionProvider.eee7,
      id: 7,
    },
    {
      text: "8.ECE W/S in Cyber Physical Systems",
      handler:props.actionProvider.eee8,
      id: 8,
    },
    {
      text: "9.ECE W/S in Data Science",
      handler:props.actionProvider.eee9,
      id: 9,
    },
    {
      text: "10.Electronics and Communication Engineering w/s VLSI & Embedded Systems",
      handler:props.actionProvider.eee10,
      id: 10,
    },
    {
      text: "11.Electronics and Communication Engineering w/s Advanced Communication Systems",
      handler:props.actionProvider.eee11,
      id: 11,
    },
    {
      text: "12.Electronics and Communication Engineering w/s Signal/Image Processing using AI",
      handler:props.actionProvider.eee12,
      id: 12,
    },
    {
      text: "13.Electronics and Instrumentation Engineering",
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