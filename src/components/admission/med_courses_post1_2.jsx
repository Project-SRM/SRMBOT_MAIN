import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post1_2 = (props) => {
  const med_courses_post1_2 = [
    {
      text: "General Medicine",
      handler: props.actionProvider.med_courses_post1_2_1,
      id: 1,
    },
    {
      text: "Paediatrics",
      handler: props.actionProvider.med_courses_post1_2_2,
      id: 2,
    },
    {
      text: "Psychiatry",
      handler: props.actionProvider.med_courses_post1_2_3,
      id: 3,
    },
    {
      text: "Dermatology, Venerology and Leprosy",
      handler: props.actionProvider.med_courses_post1_2_4,
      id: 4,
    },
    {
      text: "Respiratory Medicine",
      handler: props.actionProvider.med_courses_post1_2_5,
      id: 5,
    },
    {
      text: "Radio Diagnosis",
      handler: props.actionProvider.med_courses_post1_2_6,
      id: 6,
    },
    {
      text: "Anaesthesia",
      handler: props.actionProvider.med_courses_post1_2_7,
      id: 7,
    },
    {
      text: "Obstetrics & Gynaecology",
      handler: props.actionProvider.med_courses_post1_2_8,
      id: 8,
    },
    {
      text: "General Surgery",
      handler: props.actionProvider.med_courses_post1_2_9,
      id: 9,
    },
    {
      text: "Orthopaedics",
      handler: props.actionProvider.med_courses_post1_2_10,
      id: 10,
    },
    {
      text: "Ophthalmology",
      handler: props.actionProvider.med_courses_post1_2_11,
      id: 11,
    },
    {
      text: "Otorhinolaryngology(ENT)",
      handler: props.actionProvider.med_courses_post1_2_12,
      id: 12,
    },
    
    
    
  ];

  const buttonsMarkup = med_courses_post1_2.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post1_2;