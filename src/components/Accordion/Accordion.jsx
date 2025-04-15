// import React, { useState } from "react";

const Accordion = ({ ques, ans, showFaq }) => {
  // const [show, setShow] = useState(false);
  // const btnText = showFaq ? "hide" : "show";

  return (
    <div className="acc-container">
      <div className="ques-box">
        <p className="faq-ques">{ques}</p>
        {/* <button onClick={() => setShow(!show)}>{btnText}</button> */}
      </div>
      {showFaq && <div className="faq-ans">{ans}</div>}
    </div>
  );
};

export default Accordion;
