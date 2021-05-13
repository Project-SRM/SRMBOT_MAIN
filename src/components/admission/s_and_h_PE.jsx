import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_PE = (props) => {
  const s_and_h_PE = [
    {
      text: "B.Sc. - Physical Education, Health Education and Sports",
      handler: props.actionProvider.s_and_h_PE1,
      id: 1,
    },
    {
      text: "B.Sc. Yoga",
      handler: props.actionProvider.s_and_h_PE2,
      id: 2,
    },
    
   
    
    
    
    
    
    
  ];

  const buttonsMarkup = s_and_h_PE.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_PE;