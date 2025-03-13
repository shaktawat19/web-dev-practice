import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [toasts, setToasts] = useState([]);
  let timerIds = useRef({});

  const handleClose = (id) => {
    clearTimeout(timerIds.current[id]);
    delete timerIds.current[id];

    setToasts((prevToasts) => {
      let filteredToasts = prevToasts.filter((toast) => toast.id !== id);
      return filteredToasts;
    });
  };

  const handleAdd = (message, type) => {
    let id = new Date().getTime();
    let newToast = [...toasts, { id, message, type }];
    setToasts(newToast);
    timerIds.current[id] = setTimeout(() => handleClose(id), 3000);
  };

  return (
    <div className="App">
      <div className="toast-container">
        {toasts &&
          toasts.map(({ message, type, id }) => (
            <div key={id} className={`toast ${type}`}>
              {message} Toast
              <span className="close" onClick={() => handleClose(id)}>
                X
              </span>
            </div>
          ))}
      </div>
      <div className="btn-container">
        <button onClick={() => handleAdd("Success", "success")}>
          Success Toast
        </button>
        <button onClick={() => handleAdd("Warning", "warning")}>
          Warning Toast
        </button>
        <button onClick={() => handleAdd("Error", "error")}>Error Toast</button>
      </div>
    </div>
  );
}
