import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [tempProgress, setTempProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setTempProgress(progress), 1000);
  }, [progress]);

  return (
    <div>
      <h2>Progress </h2>
      <div className="outer">
        {/* In Simple way */}
        {/* <div className="inner" style={{ width: `${progress}%` }}>
          {progress} %
        </div> */}

        {/* Using Animation */}
        <div
          className="inner"
          style={{
            transform: `translateX(${tempProgress - 100}%)`,
            color: progress < 5 ? "black" : "white",
          }}
        >
          {tempProgress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
