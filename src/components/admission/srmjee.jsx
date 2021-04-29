import React from "react";

// import "./fees.css";

const srmjee = (props) => {
  const srmjee = [
    {
      text: "Syllabus",
      handler: props.actionProvider.syllabus,
      id: 1,
    },
    {
      text: "Test Cities",
      handler: props.actionProvider.test,
      id: 2,
    },
    {
      text: "Important Dates",
      handler: props.actionProvider.dates,
      id: 3,
    },
   
    
    
  ];

  const buttonsMarkup = srmjee.map((srm) => (
    <button key={srm.id} onClick={srm.handler} className="option-button">
      {srm.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default srmjee;