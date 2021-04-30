import React from "react";

const programs = (props) => {
  const programs = [
    {
      text: "What room furnishings are provided by the hostel?",
      handler:props.actionProvider.hostelQues1
    },
    { text: "What necessary items students must bring to the hostel?", handler:props.actionProvider.hostelQues2},
    { text: "What are the facilities available for the students in the hostel?", handler:props.actionProvider.hostelQues3},
    { text: "What are the recreational facilities available in the hostel?", handler:props.actionProvider.hostelQues4},
    { text: "What are the Hostel Mess Facilities?", handler:props.actionProvider.hostelQues5},
    { text: "Is there a Laundry Service available in the hostel?", handler:props.actionProvider.hostelQues6},
    { text: "Know More", handler:props.actionProvider.hostelQues7},
   
    
  ];

  const buttonsMarkup = programs.map((prog) => (
    <button key={prog.id} onClick={prog.handler} className="option-eligibility-button ">
      {prog.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default programs;