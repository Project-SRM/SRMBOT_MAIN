import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_commerce = (props) => {
  const s_and_h_commerce = [
    {
      text: "B.Com.Commerce",
      handler: props.actionProvider.s_and_h_commerce1,
      id: 1,
    },
    {
      text: "B.Com. - Information System and Management",
      handler: props.actionProvider.s_and_h_commerce2,
      id: 2,
    },
    {
      text: "B.Com. (Hons.) - International Accounting and Finance",
      handler: props.actionProvider.s_and_h_commerce3,
      id: 3,
    },
    {
      text: "B.Com. (Hons.) - Professional Accounting",
      handler: props.actionProvider.s_and_h_commerce4,
      id: 3,
    },
    {
      text: "B.Com. (Hons.) - Strategic Finance",
      handler: props.actionProvider.s_and_h_commerce5,
      id: 3,
    },
    
    
    
    
  ];

  const buttonsMarkup = s_and_h_commerce.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_commerce;