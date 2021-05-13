import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_courses_post = (props) => {
  const s_and_h_courses_post = [
    {
      text: "English",
      handler: props.actionProvider.s_and_h_courses_post1,
      id: 1,
    },
    {
      text: "Journalism & Mass Communication",
      handler: props.actionProvider.s_and_h_courses_post2,
      id: 2,
    },
    {
      text: "Visual Communication",
      handler: props.actionProvider.s_and_h_courses_post3,
      id: 3,
    },
    {
      text: "Commerce",
      handler: props.actionProvider.s_and_h_courses_post4,
      id: 3,
    },
    {
      text: "Corporate Secretary And Accounting & Finance",
      handler: props.actionProvider.s_and_h_courses_post5,
      id: 3,
    },
    {
      text: "Education",
      handler: props.actionProvider.s_and_h_courses_post6,
      id: 3,
    },
    {
      text: "Bio-Technology",
      handler: props.actionProvider.s_and_h_courses_post7,
      id: 3,
    },
    {
      text: "Basic Sciences",
      handler: props.actionProvider.s_and_h_courses_post8,
      id: 3,
    },
    {
      text: "Computer Science",
      handler: props.actionProvider.s_and_h_courses_post9,
      id: 3,
    },
    {
      text: "Physical Education",
      handler: props.actionProvider.s_and_h_courses_post10,
      id: 3,
    },
    
    
    
    
  ];

  const buttonsMarkup = s_and_h_courses_post.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_courses_post;