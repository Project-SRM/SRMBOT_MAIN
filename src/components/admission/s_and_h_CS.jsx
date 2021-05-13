import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_CS = (props) => {
  const s_and_h_CS = [
    {
      text: "B.C.A. - Computer Applications",
      handler: props.actionProvider.s_and_h_CS1,
      id: 1,
    },
    {
      text: "B.C.A. - Computer Applications - Data Science",
      handler: props.actionProvider.s_and_h_CS2,
      id: 2,
    },
    {
      text: "B.Sc. - Computer Science",
      handler: props.actionProvider.s_and_h_CS3,
      id: 3,
    }
    
    
    
    
  ];

  const buttonsMarkup = s_and_h_CS.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_CS;