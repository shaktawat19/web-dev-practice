import { useState, useEffect, useRef } from "react";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [tabIndex, setIndex] = useState(0);
  let ref = useRef(null);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const startInterval = () => {
    if (ref.current) handleClearId();
    ref.current = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(ref.current);
    };
  }, []);

  const handleClearId = () => {
    clearInterval(ref.current);
  };
  
  function leftBtnHandler() {
    handleClearId();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function rightBtnHandler() {
    handleClearId();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  if (!images.length) return <div>Loading...</div>;

  return (
    <div className="container">
      <button
        className="left-btn"
        onClick={leftBtnHandler}
        aria-label="Previous"
      >
        &lt;
      </button>

      {images.map(({ download_url, id }, idx) => (
        <img
          key={id}
          src={download_url}
          alt={"image"}
          className={tabIndex === idx ? "active" : ""}
          onMouseEnter={() => handleClearId()}
          onMouseLeave={() => startInterval()}
        />
      ))}
      <button className="right-btn" onClick={rightBtnHandler} aria-label="Next">
        &gt;
      </button>
    </div>
  );
};
export default ImageCarousel;
