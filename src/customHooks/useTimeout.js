import { useEffect, useRef } from "react";

const useTimeout = (callback, delay) => {
  const callbackRef = useRef();
  callbackRef.current = callback;  //Referring to updated callback

  useEffect(() => {
    const timerId = setTimeout(callbackRef.current, delay);
    return () => {
      clearTimeout(timerId);
    };
  }, [delay]);
};

export default useTimeout;

// Problem Statement:
// Create a hook to easily use setTimeout(callback, delay).

// 1.) reset the timer if delay changes
// 2.) DO NOT reset the timer if only callback changes

// That means :
// "Whenever this hook is used, you need to reset the timer in case the delay is changed in the hook"
// "We don't need to reset the timer if only the callback function is changed in the hook, in that case the timer will continue from the last time"

// Understanding Solution:
// This function will take 2 arguments i.e a cllback function and a delay.
// Here, we need to reset the timer if delay changes so we need to call the callback function inside the useEffect which will depend on the delay.
// But since the callback function will execute after delay, so we need to use setTimeout inside useEffect.

// And in order to make sure that the timer get cleared for the next time use of the custom hook, we need to return a function from useEffect to clear
// the timer, it's a property of useEffect that it exceutes the return statement first everytime.(It acts a cleaner)

// Now the issue here is we're using callback inside useEffect, so we necessarily need to pass it in the dependency array, but in that case timer will get
// reset if the callback changes, so we can't do that.

// Now if we left here, then it will always refer the old callback even if a new callback is passed, so we need to store the reference of the callback.
// Now instead of calling the callback directly in setTimeout, we'll use its reference. 
// This will refer to the updated callback everytime in case the case the callback changes or component re-render.

// https://www.youtube.com/watch?v=FsJCGY9mMi0


// export function useTimeout(callback: () => void, delay: number) {
//     const callbackRef = useRef<() => void>(() => { });
  
  
//     useEffect(() => {
//       callbackRef.current = callback;
//     }, [callback]);
  
//     useEffect(() => {
//       if (delay === null) return;
//       const tick = () => callbackRef.current();
//       const timerId = setTimeout(tick, delay);
//       return () => clearTimeout(timerId);
//     }, [delay]);
//   }