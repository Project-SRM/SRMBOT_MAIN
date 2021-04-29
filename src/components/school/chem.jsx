import React from "react";

// import "./tutionfees.css";

const chem = (props) => {
  const chem = [
    {
      text: "Nanotechnology",
      handler:props.actionProvider.chem1,
      id: 1,
    },
    
    
  ];

  const buttonsMarkup = chem.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default chem;