import React from "react";

// import "./AdmissionIndia.css";

const med_courses4_2 = (props) => {
  const med_courses4_2 = [
    {
      text: "POs/PSOs/COs",
      handler: props.actionProvider.med_courses4_2_1,
      id: 1,
    },
    {
      text: "Bachelor of Physiotherapy",
      handler: props.actionProvider.med_courses4_2_2,
      id: 2,
    },
  ];

  const buttonsMarkup = med_courses4_2.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses4_2;