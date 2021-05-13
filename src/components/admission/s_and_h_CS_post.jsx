import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_CS_post = (props) => {
  const s_and_h_CS_post = [
    {
      text: "M.C.A. - Computer Applications",
      handler: props.actionProvider.s_and_h_CS_post1,
      id: 1,
    },
    {
      text: "M.Sc. - Information Technology",
      handler: props.actionProvider.s_and_h_CS_post2,
      id: 2,
    },
    {
      text: "M.Sc. - Applied Data Science",
      handler: props.actionProvider.s_and_h_CS_post3,
      id: 3,
    }
    
    
    
    
  ];

  const buttonsMarkup = s_and_h_CS_post.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_CS_post;