import React from "react";

// import "./admissions.css";

const placement_mile = (props) => {
  const placement_mile = [
    {
      text: "Know More",
      handler:props.actionProvider.placement_mile_know_more,
      id: 1,
    },
    
    
  ];

  const buttonsMarkup = placement_mile.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default placement_mile;