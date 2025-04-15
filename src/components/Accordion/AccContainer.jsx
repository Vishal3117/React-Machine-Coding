import React, { useState } from "react";
import Accordion from "./Accordion";
import data from "../../Data/accordion_data.json";

const AccContainer = () => {
  const faqData = data.faqs;

  //if we want to close one faq on opening another
  const [showIndex, setShowIndex] = useState(-1);

  const handleFAQClick = (index) => {
    setShowIndex((prev) => {
      if (prev != index) return index;
      else return -1;
    });
  };

  return (
    <div>
      <h2>FAQ's</h2>
      {faqData.map((faq, index) => (
        <div onClick={() => handleFAQClick(index)} key={index}>
          <Accordion
            key={index}
            ques={faq.question}
            ans={faq.answer}
            showFaq={index === showIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default AccContainer;
