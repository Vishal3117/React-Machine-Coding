import React, { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);

  //we need to bind this inputRef with input field using 'ref' property of the field, after that we can control the input field using inputRef

  const inputHandler = () => {
    console.log(inputRef);

    //controlling input
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Change placeholder";
    inputRef.current.value = 256;
  };

  const toggleHandler = () => {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  return (
    <>
      <div>UseRefHook</div>
      <input ref={inputRef} type="text" placeholder="Enter anything" />
      <button onClick={inputHandler}>Manipulate Input</button>
      <button onClick={toggleHandler}>Toggle Input</button>
    </>
  );
};

export default UseRefHook;
