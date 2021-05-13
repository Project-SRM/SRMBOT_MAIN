import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_BS_post = (props) => {
  const s_and_h_BS_post = [
    {
      text: "M.Sc. - Physics",
      handler: props.actionProvider.s_and_h_BS_post1,
      id: 1,
    },
    {
      text: "M.Sc. - Chemistry",
      handler: props.actionProvider.s_and_h_BS_post2,
      id: 2,
    },
    {
      text: "M.Sc. - Mathematics",
      handler: props.actionProvider.s_and_h_BS_post3,
      id: 3,
    },
    {
      text: "M.Sc. - Atmospheric Science",
      handler: props.actionProvider.s_and_h_BS_post4,
      id: 3,
    },
    {
      text: "M.Sc. - Organic Chemistry",
      handler: props.actionProvider.s_and_h_BS_post5,
      id: 3,
    },
    {
      text: "M.Sc. - Applied Mathematics & Data Analytics",
      handler: props.actionProvider.s_and_h_BS_post6,
      id: 3,
    },
    {
      text: "M.Sc.-Biochemistry",
      handler: props.actionProvider.s_and_h_BS_post7,
      id: 3,
    },
    
    
    
  ];

  const buttonsMarkup = s_and_h_BS_post.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_BS_post;