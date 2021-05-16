import React from "react";

// import "./AdmissionIndia.css";

const med_sciences4_4 = (props) => {
  const med_sciences4_4 = [
    
    
    
    
  ];

  const buttonsMarkup = med_sciences4_4.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_sciences4_4;