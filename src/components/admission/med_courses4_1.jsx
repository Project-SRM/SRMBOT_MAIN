import React from "react";

// import "./AdmissionIndia.css";

const med_courses4_1 = (props) => {
  const med_courses4_1 = [
    {
      text: "Bachelor of Science(B.Sc.)",
      handler: props.actionProvider.med_courses4_1_1,
      id: 1,
    },
    {
      text: "Post Basic Bachelor of Science(P.B. B.Sc)",
      handler: props.actionProvider.med_courses4_1_2,
      id: 2,
    },
    {
      text: "Diploma in General Nursing and Midwifery",
      handler: props.actionProvider.med_courses4_1_3,
      id: 3,
    },
  ];

  const buttonsMarkup = med_courses4_1.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses4_1;