import React from "react";

import "./transportfees.css";

const transportfees = (props) => {
  const transportfees = [
    {
      text: "Know More",
      handler:props.actionProvider.transportfees,
      id: 1,
    },
    
    
  ];

  const buttonsMarkup = transportfees.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default transportfees;