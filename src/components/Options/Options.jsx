import React from "react";

// import "./Options.css";

const Options = (props) => {
  const options = [
    
    {
      text: "Admissions",
      handler: props.actionProvider.handleadmissions,
      id: 1,
    },
    
    
    { text: "Academics", handler:props.actionProvider.academics, id: 2 },
    { text: "Research", handler:props.actionProvider.research, id: 3 },
    { text: "Events", handler:props.actionProvider.events, id: 4 },
    { text: "Hostel",
    handler: props.actionProvider.hostel,
    id: 5 },
    { text: "Campus Life", handler:props.actionProvider.campus, id: 6 },
    { text: "About Us",
     handler: props.actionProvider.handleaboutus,
     id: 7},
    
    { text: "Apply Now", 
    handler:props.actionProvider.apply,
     id: 8
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;