import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post1 = (props) => {
  const med_courses_post1 = [
    {
      text: "Non Clinical Courses",
      handler: props.actionProvider.med_courses_post1_1,
      id: 1,
    },
    {
      text: "Clinical Courses",
      handler: props.actionProvider.med_courses_post1_2,
      id: 2,
    },
    {
      text: "Super Speciality",
      handler: props.actionProvider.med_courses_post1_3,
      id: 3,
    },
  ];

  const buttonsMarkup = med_courses_post1.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post1;