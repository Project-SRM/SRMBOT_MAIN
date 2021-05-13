import React from "react";

// import "./AdmissionIndia.css";

const med_courses_post2 = (props) => {
  const med_courses_post2 = [
    {
      text: "MDS Conservative Dentistry and Endodontics ",
      handler: props.actionProvider.med_courses_post2_1,
      id: 1,
    },
    {
      text: "MDS Oral and Maxillofacial Surgery ",
      handler: props.actionProvider.med_courses_post2_2,
      id: 2,
    },
    {
      text: "MDS Orthodontics & Dento Facial Orthopaedics ",
      handler: props.actionProvider.med_courses_post2_3,
      id: 3,
    },
    {
      text: "MDS Periodontology",
      handler: props.actionProvider.med_courses_post2_4,
      id: 4,
    },
    
    {
      text: "MDS Pediatric and Preventive Dentistry",
      handler: props.actionProvider.med_courses_post2_5,
      id: 5,
    },
    {
      text: "MDS Prosthodontics and Crown & Bridge",
      handler: props.actionProvider.med_courses_post2_6,
      id: 6,
    },
    {
      text: "Oral and Maxillofacial Pathology ",
      handler: props.actionProvider.med_courses_post2_7,
      id: 7,
    },
    {
      text: "Public Health Dentistry",
      handler: props.actionProvider.med_courses_post2_8,
      id: 8,
    },
    
    
    
    
  ];

  const buttonsMarkup = med_courses_post2.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses_post2;