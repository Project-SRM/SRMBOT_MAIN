import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post5_2 = (props) => {
  const med_courses_post5_2 = [
    {
      text: "M.Sc. Speech Language Pathology (M.Sc. SLP)",
      handler: props.actionProvider.med_courses_post5_2_1,
      id: 1,
    },
    {
      text: "M.Sc. Audiology (M.Sc. Aud)",
      handler: props.actionProvider.med_courses_post5_2_2,
      id: 2,
    },
    
    
  ];

  const buttonsMarkup = med_courses_post5_2.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post5_2;