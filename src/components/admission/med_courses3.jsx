import React from "react";

// import "./AdmissionIndia.css";

const med_courses3 = (props) => {
  // const med_courses3 = [
  //   {
  //     text: "SRM Medical College Hospital and Research Centre ",
  //     handler: props.actionProvider.medical_courses1,
  //     id: 1,
  //   },
    
    
    
  // ];

  const buttonsMarkup = med_courses3.map((admin) => (
    <button key={admin.id} onClick={admin.handler} className="option-button">
      {admin.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default med_courses3;