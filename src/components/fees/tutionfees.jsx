import React from "react";

const tutionfees = (props) => {
  const tutionfees = [
    {
      text: "Know More",
      handler:props.actionProvider.el1,
      id: 1,
    },
    
    
  ];

  const buttonsMarkup = tutionfees.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default tutionfees;