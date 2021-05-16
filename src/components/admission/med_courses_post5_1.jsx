import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post5_1 = (props) => {
  const med_courses_post5_1 = [
    {
      text: "M. Phil",
      handler: props.actionProvider.med_courses_post5_1_1,
      id: 1,
    },
  ];

  const buttonsMarkup = med_courses_post5_1.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post5_1;