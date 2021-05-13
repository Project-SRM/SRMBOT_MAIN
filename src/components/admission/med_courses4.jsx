import React from "react";

// import "./AdmissionIndia.css";

const med_courses4 = (props) => {
  const med_courses4 = [
    {
      text: "SRM Medical College Hospital and Research Centre ",
      handler: props.actionProvider.medical_courses4_1,
      id: 1,
    },
    
    
    
  ];

  const buttonsMarkup = med_courses4.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses4;