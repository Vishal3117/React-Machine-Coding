import React from "react";

const Toaster = ({ toastData, removeToast }) => {
  return (
    <div className={`toast ${toastData.toastClass}`}>
      {toastData.toastMsg}
      <span onClick={() => removeToast(toastData.id)}>x</span>
    </div>
  );
};

export default Toaster;
