import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_CSA = (props) => {
  const s_and_h_CSA = [
    {
      text: "B.Com. - Accounting and Finance",
      handler: props.actionProvider.s_and_h_CSA1,
      id: 1,
    },
    {
      text: "B.Com. - Corporate Secretaryship",
      handler: props.actionProvider.s_and_h_CSA2,
      id: 2,
    },
    
   
    
    
    
    
    
  ];

  const buttonsMarkup = s_and_h_CSA.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_CSA;