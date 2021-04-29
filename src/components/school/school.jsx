import React from "react";

const school = (props) => {
  const school = [
    {
      text: "School of Bio-Engineering",
      handler:props.actionProvider.bio,
      id: 1,
    },
    {
      text: "School of Chemical and Material Technology",
      handler:props.actionProvider.chem,
      id: 2,
    },
    {
      text: "School of Civil Engineering",
      handler:props.actionProvider.civil,
      id: 3,
    },
    {
      text: "School of Computing",
      handler:props.actionProvider.comp,
      id: 4,
    },
    {
      text: "School of Electrical and Electronics Engineering",
      handler:props.actionProvider.eee,
      id: 5,
    },
    {
      text: "School of Mechanical Engineering",
      handler:props.actionProvider.mech,
      id: 6,
    },
    {
      text: "School of Architechture and Interior Designing",
      handler:props.actionProvider.arch,
      id: 7,
    },
    
    
  ];

  const buttonsMarkup = school.map((admission) => (
    <button key={admission.id} onClick={admission.handler} className="option-eligibility-button">
      {admission.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default school;