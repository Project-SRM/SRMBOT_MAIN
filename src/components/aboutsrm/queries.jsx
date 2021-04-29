import React from "react";

// import "./aboutus.css";

const aboutus = (props) => {
  const aboutus = [
    {
      text: "Yes",
      handler: props.actionProvider.yesmessage,
      id: 1,
    },
    {
      text: "No",
      handler: props.actionProvider.nomessage,
      id: 2,
    },
    
    
  ];

  const buttonsMarkup = aboutus.map((about) => (
    <button key={about.id} onClick={about.handler} className="option-button">
      {about.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default aboutus;