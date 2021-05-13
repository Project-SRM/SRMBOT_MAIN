import React from "react";

// import "./AdmissionIndia.css";

const law_courses_post = (props) => {
  const law_courses_post = [
    {
      text: "LL.M - Criminal Law and Criminal Justice",
      handler: props.actionProvider.law_courses_post1,
      id: 1,
    },
    {
      text: "LL.M - International Trade Law",
      handler: props.actionProvider.law_courses_post2,
      id: 2,
    },
    
    
    
    
  ];

  const buttonsMarkup = law_courses_post.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default law_courses_post;