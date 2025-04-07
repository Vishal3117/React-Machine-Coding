import React, { useEffect, useRef, useState } from "react";

const OTPInput = ({ otpLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const fieldRef = useRef([]); //this will store the reference of each input element

  useEffect(() => {
    fieldRef.current[0].focus(); //to focus the first element on component mount
  }, []);

  const handleKeyDown = (e, index) => {
    const pressedKey = e.key;
    const copyOtpFields = [...otpFields];

    if (pressedKey === "Backspace") {
      copyOtpFields[index] = ""; //will remove the input value of the current index

      setOtpFields(copyOtpFields);
      if (index > 0) {
        fieldRef.current[index - 1].focus(); //will shift the focus on the prev input element
      }
      return;
    }

    if (pressedKey === "ArrowRight") {
      if (index + 1 < otpFields.length) {
        fieldRef.current[index + 1].focus(); //will shift the focus on the next input element
      }
      return;
    }

    if (pressedKey === "ArrowLeft") {
      if (index > 0) {
        fieldRef.current[index - 1].focus(); //will shift the focus on the prev input element
      }
      return;
    }

    if (isNaN(pressedKey)) {
      return;
    }

    copyOtpFields[index] = pressedKey;
    if (index + 1 < otpFields.length) {
      fieldRef.current[index + 1].focus(); //will shift the focus on the next input element
    }

    setOtpFields(copyOtpFields);
  };

  return (
    <div className="otp-container">
      {otpFields.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          className="otp-input"
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(currentInput) => (fieldRef.current[index] = currentInput)}
          //ref={(currentInput) => console.log(currentInput, index)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
