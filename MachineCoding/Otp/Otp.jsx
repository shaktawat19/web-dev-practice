import { useEffect, useRef, useState } from "react";

export default function Otp({ optLength = 6 }) {
  const [values, setValues] = useState(new Array(optLength).fill(""));
  const arrRef = useRef([]);
  console.log(arrRef.current);

  const handleChange = ({ key }, idx) => {
    if (key === "ArrowLeft") {
      if (idx >= 1) arrRef.current[idx - 1].focus();
      return;
    }

    if (key === "ArrowRight") {
      if (idx + 1 < optLength) arrRef.current[idx + 1].focus();
      return;
    }

    let copiedValues = [...values];
    if (key === "Backspace") {
      copiedValues[idx] = "";
      setValues(copiedValues);
      if (idx >= 1) arrRef.current[idx - 1].focus();
      return;
    }

    if (isNaN(key)) return;

    copiedValues[idx] = key;
    if (idx + 1 < optLength) arrRef.current[idx + 1].focus();
    setValues(copiedValues);
  };

  const handleInputChange = (e, idx) => {
    const copiedValues = [...values];
    copiedValues[idx] = e.target.value.slice(-1); // Take only the last character
    setValues(copiedValues);

    // Automatically move focus to the next input
    if (e.target.value && idx + 1 < optLength) {
      arrRef.current[idx + 1].focus();
    }
  };

  useEffect(() => {
    arrRef.current[0].focus();
  }, []);

  return (
    <div className="otp-container">
      {values.map((elem, idx) => {
        return (
          <input
            ref={(currInp) => (arrRef.current[idx] = currInp)}
            key={`${elem}_${idx}`}
            value={elem}
            onKeyDown={(e) => handleChange(e, idx)}
            onChange={handleInputChange}
          />
        );
      })}
    </div>
  );
}

/* TODO Improvements:
- More performant (memoization and debouncing reduce unnecessary renders).
- Scalable (externalized logic via hooks and dynamic length support).
- Accessible (ARIA attributes and better focus management).
 */