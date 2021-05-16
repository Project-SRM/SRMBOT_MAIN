import React from "react";

// import "./AdmissionIndia.css";

const med_courses4_5 = (props) => {
  const med_courses4_5 = [
    {
      text: "B.Sc. Public Health",
      handler: props.actionProvider.med_courses4_5_1,
      id: 1,
    },
    
    
    
  ];

  const buttonsMarkup = med_courses4_5.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses4_5;