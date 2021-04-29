import React from "react";


const cse = (props) => {
  const cse = [
    {
      text: "Artificial Intelligence",
      handler:props.actionProvider.comp1,
      id: 1,
    },
    {
      text: "Computer Science and Business Systems(in partnership with TCS)",
      handler:props.actionProvider.comp2,
      id: 2,
    },
    {
      text: "Computer Science and Engineering",
      handler:props.actionProvider.comp3,
      id: 3,
    },
    {
      text: "CSE with Big Data Analytics",
      handler:props.actionProvider.comp4,
      id: 4,
    },
    {
      text: "CSE W/S in Artificial Intelligence and Machine Learning",
      handler:props.actionProvider.comp5,
      id: 5,
    },
    {
      text: "CSE W/S in in Data Science & Artificial Intelligence (in association with IBM)",
      handler:props.actionProvider.comp6,
      id: 6,
    },
    {
      text: "CSE W/S in Block chain Technology",
      handler:props.actionProvider.comp7,
      id: 7,
    },
    {
      text: "CSE W/S in Blockchain&IoT (in association with IBM)",
      handler:props.actionProvider.comp8,
      id: 8,
    },
    {
      text: "CSE W/S in Cloud Computing",
      handler:props.actionProvider.comp9,
      id: 9,
    },
    {
      text: "CSE W/S in Cloud Engineering and DevOps Automation (in association with Xebia)",
      handler:props.actionProvider.comp10,
      id: 10,
    },
    {
      text: "CSE W/S in Computer Networking",
      handler:props.actionProvider.comp11,
      id: 11,
    },
    {
      text: "CSE W/S in Cyber Security",
      handler:props.actionProvider.comp12,
      id: 12,
    },
    {
      text: "CSE W/S in Gaming Technology",
      handler:props.actionProvider.comp13,
      id: 13,
    },
    {
      text: "CSE W/S in Internet of Things (IOT)",
      handler:props.actionProvider.comp14,
      id: 14,
    },
    {
      text: "CSE with Software Engineering",
      handler:props.actionProvider.comp15,
      id: 15,
    },
    {
      text: "CSE W/S in Cloud and Mobile Based Applications# (in association with IBM)",
      handler:props.actionProvider.comp16,
      id: 16,
    },
    {
      text: "CSE W/S in Information Technology",
      handler:props.actionProvider.comp17,
      id: 17,
    },
    {
      text: "CSE with specialization in Financial Technologies",
      handler:props.actionProvider.comp18,
      id: 18,
    },
    {
      text: "Information Technology",
      handler:props.actionProvider.comp19,
      id: 19,
    },
    
    
  ];

  const buttonsMarkup = cse.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default cse;