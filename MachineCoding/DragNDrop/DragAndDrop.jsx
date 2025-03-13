import { useState, useRef } from "react";

export default function DragAndDrop({ initialData }) {
  const [data, setData] = useState(initialData);
  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (e, targetContainer) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prevState) => {
      const newData = { ...prevState };
      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i !== item
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {Object.keys(data).map((container, index) => (
        <div
          onDrop={(e) => handleDrop(e, container)}
          onDragOver={handleDragOver}
          key={index}
          style={{
            background: "#f0f0f0",
            padding: "1rem",
            width: 250,
            minHeight: 300,
          }}
        >
          <h3>{container}</h3>
          {data[container].map((item, idx) => (
            <div
              draggable
              onDragStart={(e) => handleDragStart(e, item, container)}
              onDragEnd={handleDragEnd}
              key={idx}
              style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0 8px 0",
                backgroundColor: "white",
                cursor: "move",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
