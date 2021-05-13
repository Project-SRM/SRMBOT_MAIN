import React from "react";

// import "./tutionfees.css";

const civil = (props) => {
  const civil = [
    {
      text: "1.Civil Engineering",
      handler:props.actionProvider.civil1,
      id: 1,
    },
    {
      text: "2.Civil Engineering with Computer Applications",
      handler:props.actionProvider.civil2,
      id: 2,
    },
    {
      text: "3.Civil Engineering w/s Structural Engineering",
      handler:props.actionProvider.civil3,
      id: 3,
    },
    {
      text: "4.Civil Engineering w/s Geotechnical Engineering",
      handler:props.actionProvider.civil4,
      id: 4,
    },
    {
      text: "5.Civil Engineering w/s Transportation Engineering",
      handler:props.actionProvider.civil5,
      id: 5,
    },
    {
      text: "6.Civil Engineering w/s Water Resources and Environmental Engineering",
      handler:props.actionProvider.civil6,
      id: 6,
    },
    
    
  ];

  const buttonsMarkup = civil.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default civil;