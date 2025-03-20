import React, { useMemo } from "react";
import { useState } from "react";
// import useCustomMemo from "../customHooks/useMemoPolyfill";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  const squaredCounter = () => {
    console.log("Expensive Calculations");
    return count * count;
  };

  //So the above function will also called everytime when we press 'Decrement' button because of component re-rendering
  //So in order to avoid the expensive calcultion unnecessarily, we'll use useMemo hook.
  //https://www.notion.so/React-and-Hooks-1bcee4c2f3218009a030d00a9660b3d3?pvs=4

  // const memoizedSquaredValue = useCustomMemo(squaredCounter, [count]);   //using my custom useMemo hook

  const memoizedSquaredValue = useMemo(squaredCounter, [count]);
  // now the expensive calculation (squaredCounter function) will get called only when count changes

  return (
    <>
      <div>
        <h2>Counter : {count}</h2>
        <h2>Squared Value : {memoizedSquaredValue}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <h2>Decreasing Counter : {count2}</h2>
        <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
      </div>
    </>
  );
};

export default UseMemoHook;
