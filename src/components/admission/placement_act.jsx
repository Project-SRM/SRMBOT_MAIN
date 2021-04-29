import React from "react";

// import "./admissions.css";

const placement_act = (props) => {
  const placement_act = [
    {
      text: "Know More",
      handler:props.actionProvider.placement_act_know_more,
      id: 1,
    },
    
    
  ];

  const buttonsMarkup = placement_act.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default placement_act;