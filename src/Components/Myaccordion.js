import React, { useState } from "react";

const MyAccordion = ({ question, answer }) => {
  const [show, SetShow] = useState(false);

  return (
    <div>
      <div className="main-heading">
        <p onClick={() => SetShow(!show)}>{show ? "➖" : '➕'}</p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answers" >{answer}</p>}
    </div>
  );
};

export default MyAccordion;
