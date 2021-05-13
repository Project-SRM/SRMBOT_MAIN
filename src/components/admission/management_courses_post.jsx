import React from "react";

// import "./AdmissionIndia.css";

const management_courses_post = (props) => {
  const management_courses_post = [
    {
      text: "M.B.A. - Business Administration",
      handler: props.actionProvider.management_courses_post1,
      id: 1,
    },
    {
      text: "M.B.A - Hospital Management",
      handler: props.actionProvider.management_courses_post2,
      id: 2,
    },
    {
      text: "M.B.A - Waste Management and Social Entrepreneurship",
      handler: props.actionProvider.management_courses_post3,
      id: 3,
    },
    {
      text: "M.B.A - Banking and Financial Service",
      handler: props.actionProvider.management_courses_post4,
      id: 3,
    },
    {
      text: "M.B.A. - Data Science",
      handler: props.actionProvider.management_courses_post4,
      id: 3,
    },
    {
      text: "M.B.A - Digital Marketing",
      handler: props.actionProvider.management_courses_post4,
      id: 3,
    },
    {
      text: "M.B.A - Business Analytics",
      handler: props.actionProvider.management_courses_post4,
      id: 3,
    },
    
    
    
    
  ];

  const buttonsMarkup = management_courses_post.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default management_courses_post;