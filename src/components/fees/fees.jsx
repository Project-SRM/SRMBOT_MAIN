import React from "react";

// import "./fees.css";

const fees = (props) => {
  const fees = [
    {
      text: "Tution Fees",
      handler: props.actionProvider.tutionfees,
      id: 1,
    },
    {
      text: "Hostel Fees",
      handler: props.actionProvider.hostelfees,
      id: 2,
    },
    {
      text: "Transport Fees",
      handler: props.actionProvider.transportfees,
      id: 3,
    },
    {
      text: "Refund",
      handler: props.actionProvider.refund,
      id: 4,
    },
    {
      text: "Scholarship",
      handler: props.actionProvider.scholarship,
      id: 5,
    },
    {
      text: "Loans",
      handler: props.actionProvider.loan,
      id: 6,
    },
    
    
  ];

  const buttonsMarkup = fees.map((fee) => (
    <button key={fee.id} onClick={fee.handler} className="option-button">
      {fee.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default fees;