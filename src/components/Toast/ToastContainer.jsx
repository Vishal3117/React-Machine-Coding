import React, { useRef, useState } from "react";
import Toaster from "../Toaster";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);
  const timerRef = useRef({}); //to store the current timer

  const hideToast = (id) => {
    // const newList = toasts.filter((toast) => toast.id !== id);
    // setToasts(newList);

    // for optimization
    clearTimeout(timerRef.current[id]); // to clear the timer of the manually removed toasters and avoid the unneccesary running of settimeout in browser
    delete timerRef.current[id]; //removing the same timer from the timeref also

    setToasts((prevToasts) => {
      const filteredArr = prevToasts.filter((toast) => toast.id !== id);
      return filteredArr;
    });
  };

  const showToast = (type, msg, cls) => {
    const id = new Date().getTime();
    setToasts([
      ...toasts,
      {
        id,
        toastType: type,
        toastMsg: msg,
        toastClass: cls,
      },
    ]);
    timerRef.current[id] = setTimeout(() => hideToast(id), 5000); //storing timerId of a particular toast
  };

  return (
    <div className="t_container">
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toaster toastData={toast} removeToast={hideToast} />
        ))}
      </div>

      <div className="btn-container">
        <button
          onClick={() => showToast("Success", "Success Toast", "success")}
        >
          Success Toast
        </button>
        <button onClick={() => showToast("Info", "Info Toast", "info")}>
          Info Toast
        </button>
        <button
          onClick={() => showToast("Warning", "Warning Toast", "warning")}
        >
          Warning Toast
        </button>
        <button onClick={() => showToast("Error", "Error Toast", "error")}>
          Error Toast
        </button>
      </div>
    </div>
  );
};

export default ToastContainer;
