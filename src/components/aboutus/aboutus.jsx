import React from "react";

// import "./aboutus.css";

const aboutus = (props) => {
  const aboutus = [
    {
      text: "Know More..",
      handler: props.actionProvider.aboutusPage,
      id: 1,
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