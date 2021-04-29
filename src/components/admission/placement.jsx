import React from "react";

// import "./admissions.css";

const placement = (props) => {
  const placement = [
    {
      text: "About",
      handler:props.actionProvider.placement_about,
      id:1
    },
    { text: "Activities", handler:props.actionProvider.placement_act, id: 2 },
    { text: "Milestones", handler:props.actionProvider.placement_mile, id: 3 },
    { text: "Recruiters", handler:props.actionProvider.placement_rec, id: 4 },
    { text: "Contact Us", handler:props.actionProvider.placement_contact, id: 5 },
    
  ];

  const buttonsMarkup = placement.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default placement;