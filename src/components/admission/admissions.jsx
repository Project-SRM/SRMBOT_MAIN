import React from "react";

// import "./admissions.css";

const admissions = (props) => {
  const admissions = [
    {
      text: "India",
      handler:props.actionProvider.handlegraduate,
      id: 1,
    },
    { text: "International", handler:props.actionProvider.international, id: 2 },
    
  ];

  const buttonsMarkup = admissions.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default admissions;