import React, { useEffect, useRef, useState } from "react";
import imageData from "../Data/carouselData.json";

const DATA_LENGTH = imageData.length;

const ImageCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleNext = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex == DATA_LENGTH - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
    // if (imageIndex == DATA_LENGTH - 1) {
    //   setImageIndex(0);
    // } else {
    //   setImageIndex(imageIndex + 1);
    // }
  };

  const handlePrev = () => {
    if (imageIndex == 0) {
      setImageIndex(DATA_LENGTH - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 1000);

    //to avoid the memory leak on unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => clearInterval(intervalRef.current)}
      onMouseLeave={() => {
        intervalRef.current = setInterval(handleNext, 1000);
      }}
      className="carousel-container"
    >
      <div className="left-btn" onClick={() => handlePrev()}>
        {"<"}
      </div>
      <img
        src={imageData[imageIndex].download_url}
        alt=""
        className="carousel-img"
      />
      <div className="right-btn" onClick={() => handleNext()}>
        {">"}
      </div>
    </div>
  );
};

export default ImageCarousel;
