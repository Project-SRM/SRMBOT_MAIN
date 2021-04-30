import React from "react";

const eligibility = (props) => {
  const eligibility = [
    {
      text: "What is the eligibility criteria for B.Tech Programs?",
      handler:props.actionProvider.el1,
      id: 1,
    },
    {
      text: "What is the eligibility criteria for B.Arch ?",
      handler:props.actionProvider.el2,
      id: 2,
    },
    {
      text: "What is the eligibility criteria for Bio-Engineering Programs?",
      handler:props.actionProvider.el3,
      id: 3,
    },
    {
      text: "What is the eligibility criteria for B.Des?",
      handler:props.actionProvider.el4,
      id: 4,
    },
    { text: "What are the courses in B.Tech for which a student with PCB is eligible?", handler:props.actionProvider.el5, id: 5 },
    { text: "I am currently doing my B.Tech 1st year in other University.Can I join SRM from 2nd year?", handler:props.actionProvider.el6, id: 6 },
    { text: "I Am studying HSC through NIOS, Am I eligible?", handler:props.actionProvider.el7, id: 7 },
    { text: "Know More", handler:props.actionProvider.ElKnowMore, id: 8 },
    
  ];

  const buttonsMarkup = eligibility.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default eligibility;