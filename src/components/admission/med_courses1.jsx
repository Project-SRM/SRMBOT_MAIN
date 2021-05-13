import React from "react";

// import "./AdmissionIndia.css";

const med_courses1 = (props) => {
  const med_courses1 = [
    {
      text: "Bachelor of Medicine and Bachelor of Science(MBBS) ",
      handler: props.actionProvider.med_courses1_1,
      id: 1,
    },
  ];

  const buttonsMarkup = med_courses1.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses1;