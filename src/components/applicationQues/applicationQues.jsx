import React from "react";

import "./applicationQues.css";

const applicationQues = (props) => {
  const applicationQues = [
    {
      text: "When will be the application form be issued & how to enter data?",
      handler:props.actionProvider.appli1,
      id: 1,
    },
    { text: "What is the fee structure for admission in various programs and for lateral entry?",
     handler:props.actionProvider.appli2, 
     id: 2 },
    { text: "What are the required documents for SRMJEEE?", 
    handler:props.actionProvider.appli3, 
    id: 3 },
    { text: "Are Jee and other govt exams marks considered in SRM?", 
    handler:props.actionProvider.appli4, 
    id: 4 },
    { text: "Can an NRI candidate apply for entrance examination?", 
    handler:props.actionProvider.appli5, 
    id: 5 },
    { text: "Admission Criteria", 
    handler:props.actionProvider.adminCriteria, 
    id: 6 },
    { text: "How to Apply?", 
    handler:props.actionProvider.howToApply, 
    id: 7 },
    
  ];

  const buttonsMarkup = applicationQues.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-admission-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default applicationQues;