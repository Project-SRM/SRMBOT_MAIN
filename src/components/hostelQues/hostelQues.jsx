import React from "react";
 import "./hostelQues.css";

const programs = (props) => {
  const programs = [
    {
      text: "What room furnishings are provided by the hostel?",
      handler:props.actionProvider.hostelQues1,
      id: 1,
    },
    { text: "What necessary items must students bring to the hostel?", handler:props.actionProvider.hostelQues2, id: 2 },
    { text: "What are the facilities available for the students in the hostel?", handler:props.actionProvider.hostelQues3, id: 3 },
    { text: "What are the recreational facilities available in the hostel?", handler:props.actionProvider.hostelQues4, id: 4 },
    { text: "What are the Hostel Mess Facilities?", handler:props.actionProvider.hostelQues5, id: 5 },
    { text: "Is there a Laundry Service available in the hostel?", handler:props.actionProvider.hostelQues6, id: 6 },
   
    
  ];

  const buttonsMarkup = programs.map((prog) => (
    <button key={prog.id} onClick={prog.handler} className="option-hostelQues-button ">
      {prog.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default programs;