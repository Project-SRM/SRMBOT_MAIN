import React from "react";

import "./hostelfees.css";

const hostelfees = (props) => {
  const hostelfees = [
    {
      text: "Know More",
      handler:props.actionProvider.hostelfees,
      id: 1,
    },
    
    
  ];

  const buttonsMarkup = hostelfees.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default hostelfees;