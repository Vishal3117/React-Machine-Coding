import React, { useEffect, useState, useCallback } from "react";

const UseCallbackHook = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);

  useEffect(() => {
    console.log(`New sum. Value:${sum()}`);
    setResult(sum());
  }, [sum]);
  console.log(result);
  return (
    <>
      <h3>UseCallbackHook</h3>
      <div>
        <input
          type="text"
          placeholder="input"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <br />
        <h2>Output : {userInput || "--"}</h2>
      </div>
    </>
  );
};

export default UseCallbackHook;
