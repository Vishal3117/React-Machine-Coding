import React, { useEffect, useState } from "react";

const AnimatedProgress = () => {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prevBarValue) => {
        if (prevBarValue >= 100) {
          clearInterval(interval);
          return prevBarValue;
        }
        return prevBarValue + 5;
      });
    }, 150);

    return () => {
      clearInterval(interval); //to cleanup the interval once the component is unmounted
    };
  }, []);

  return (
    <div className="progress-container">
      <div
        style={{ transform: `translateX(${bar - 100}%)` }}
        className="progress"
      >
        Progress Bar
      </div>
    </div>
  );
};

export default AnimatedProgress;
