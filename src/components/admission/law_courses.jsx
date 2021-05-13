import React from "react";

// import "./AdmissionIndia.css";

const law_courses = (props) => {
  const law_courses = [
    {
      text: "B.A. LL.B (Hons.)",
      handler: props.actionProvider.law_courses1,
      id: 1,
    },
    {
      text: "B.Com. LL.B (Hons.)",
      handler: props.actionProvider.law_courses2,
      id: 2,
    },
    {
      text: "LL.B (Hons.)",
      handler: props.actionProvider.law_courses3,
      id: 3,
    },
    
    
    
  ];

  const buttonsMarkup = law_courses.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default law_courses;