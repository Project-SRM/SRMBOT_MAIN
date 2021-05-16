import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post4_1 = (props) => {
  const med_courses_post4_1 = [
    {
      text: "Master of Science (M.Sc.)",
      handler: props.actionProvider.med_courses_post4_1_1,
      id: 1,
    },
    {
      text: "Medical-Surgical",
      handler: props.actionProvider.med_courses_post4_1_2,
      id: 2,
    },{
      text: "Obstetrics & Gynaecology",
      handler: props.actionProvider.med_courses_post4_1_3,
      id: 3,
    },{
      text: "Community Health",
      handler: props.actionProvider.med_courses_post4_1_4,
      id: 4,
    },{
      text: "Psychiatric",
      handler: props.actionProvider.med_courses_post4_1_5,
      id: 5,
    },{
      text: "Peadiatric",
      handler: props.actionProvider.med_courses_post4_1_6,
      id: 6,
    },
    
  ];

  const buttonsMarkup = med_courses_post4_1.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post4_1;