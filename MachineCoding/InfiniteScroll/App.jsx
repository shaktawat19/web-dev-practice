import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(50);
  const element = [];
  for (let i = 0; i < count; i++) {
    element.push(<div key={i}>{i + 1}</div>);
  }

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight
    ) {
      setCount((prev) => prev + 50);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [count]);

  return <main>{element}</main>;
}
export default App;
