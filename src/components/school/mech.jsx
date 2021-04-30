import React from "react";

// import "./tutionfees.css";

const mech = (props) => {
  const mech = [
    {
      text: "Aerospace Engineering",
      handler:props.actionProvider.mech1,
      id: 1,
    },
    {
      text: "Automobile Engineering",
      handler:props.actionProvider.mech2,
      id: 2,
    },
    {
      text: "Automobile Engineering w/s in Vehicle Testing",
      handler:props.actionProvider.mech3,
      id: 3,
    },
    {
      text: "Automobile with specialisation in Automotive Electronics",
      handler:props.actionProvider.mech4,
      id: 4,
    },
    {
      text: "Mechanical Engineering",
      handler:props.actionProvider.mech5,
      id: 5,
    },
    {
      text: "Mechanical and Automation Engineering",
      handler:props.actionProvider.mech6,
      id: 6,
    },
    {
      text: "Mechanical Engineering w/s in Artificial Intelligence and Machine Learning",
      handler:props.actionProvider.mech7,
      id: 7,
    },
    {
      text: "Mechanical Engineering with specialisation in Robotics/ Mechatronics",
      handler:props.actionProvider.mech8,
      id: 8,
    },
    {
      text: "Mechanical Engineering w/s Additive Manufacturing",
      handler:props.actionProvider.mech9,
      id: 9,
    },
    {
      text: "Mechanical Engineering w/s Advanced Materials",
      handler:props.actionProvider.mech10,
      id: 10,
    },
    {
      text: "Mechanical Engineering w/s Automotive Engineering",
      handler:props.actionProvider.mech11,
      id: 11,
    },
    {
      text: "Mechatronics Engineer",
      handler:props.actionProvider.mech12,
      id: 12,
    },
    {
      text: "Mechatronics Engineering with specialisation in Robotics",
      handler:props.actionProvider.mech13,
      id: 13,
    },
    
    
  ];

  const buttonsMarkup = mech.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default mech;