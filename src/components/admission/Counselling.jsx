import React from "react";


const Counselling = (props) => {
  const Counselling = [
    {
      text: "What is the Duration of Counselling and Facility to stay in Campus?",
      handler: props.actionProvider.Coun1,
      id: 1,
    },
    {
      text: "Can the date be rescheduled and Should we deposit the original certificates?",
      handler: props.actionProvider.Coun2,
      id: 2,
    },
    {
      text: "Can counselling fees be paid in cash and is it refundable?",
      handler: props.actionProvider.Coun3,
      id: 3,
    },
    {
      text: "Should parents come along with candidates?",
      handler: props.actionProvider.Coun4,
      id: 4,
    },
    {
      text: "Does SRM arrange for educational loans? For more information :",
      handler: props.actionProvider.Coun5,
      id: 5,
    },
    {
      text: "Know More",
      handler: props.actionProvider.CounKnowMore,
      id: 6,
    }
    
    
    
  ];

  const buttonsMarkup = Counselling.map((coun) => (
    <button key={coun.id} onClick={coun.handler} className="option-eligibility-button">
      {coun.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Counselling;