import React from "react";

// import "./graduate.css";

const graduate = (props) => {
  const graduate = [
    {
      text: "Under Graduate",
      handler:props.actionProvider.handleprograms,
      id: 1,
    },
    { text: "Post Graduate", handler:props.actionProvider.handleprograms_post, id: 2 },
    
  ];

  const buttonsMarkup = graduate.map((grad) => (
    <button key={grad.id} onClick={grad.handler} className="option-button">
      {grad.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default graduate;