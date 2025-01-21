import { useEffect, useState } from "react";

export default function TrafficLights() {
  const [active, setActive] = useState(0); // The currently active light index

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % 3); // Cycle through 0, 1, 2
    }, 2000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const colors = ["green", "yellow", "red"];

  return (
    <div className="container">
      {colors.map((color, idx) => (
        <div
          key={color}
          className={`lights ${active === idx ? color : ""}`}
        ></div>
      ))}
    </div>
  );
}
