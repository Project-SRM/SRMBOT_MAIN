import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_BS = (props) => {
  const s_and_h_BS = [
    {
      text: "B.Sc. - Physics",
      handler: props.actionProvider.s_and_h_BS1,
      id: 1,
    },
    {
      text: "B.Sc. - Chemistry",
      handler: props.actionProvider.s_and_h_BS2,
      id: 2,
    },
    {
      text: "B.Sc. - Mathematics",
      handler: props.actionProvider.s_and_h_BS3,
      id: 3,
    },
    {
      text: "B.Sc.-Biochemistry",
      handler: props.actionProvider.s_and_h_BS4,
      id: 3,
    },
    
    
    
  ];

  const buttonsMarkup = s_and_h_BS.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_BS;