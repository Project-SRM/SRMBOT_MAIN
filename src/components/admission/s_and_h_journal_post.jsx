import React from "react";

// import "./AdmissionIndia.css";

const s_and_h_journal_post = (props) => {
  const s_and_h_journal_post = [
    {
      text: "M.A.- Journalism and Mass Communication",
      handler: props.actionProvider.s_and_h_journal_post1,
      id: 1,
    },
    {
      text: "M.A.-Public Relations",
      handler: props.actionProvider.s_and_h_journal_post2,
      id: 2,
    },
    
   
    
    
    
    
    
  ];

  const buttonsMarkup = s_and_h_journal_post.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default s_and_h_journal_post;