import React from "react";

// import "./admissions.css";

const placement_about = (props) => {
  const placement_about = [
    {
      text: "Know More",
      handler:props.actionProvider.placement_about_know_more,
      id: 1,
    },
    
    
  ];

  const buttonsMarkup = placement_about.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default placement_about;