import React from "react";


const arch = (props) => {
  const arch = [
    {
      text: ".B.Arch - Architecture",
      handler:props.actionProvider.arc1,
      id: 1,
    },
    {
      text: "B.Des - Interior Design",
      handler:props.actionProvider.arc2,
      id: 1,
    },
    
    
  ];

  const buttonsMarkup = arch.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default arch;