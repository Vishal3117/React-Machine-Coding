import React, { useEffect } from "react";

const ImageScroller = ({ images, setPageNumber }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        //here observer will return an array (it can perform more than one observation), so param will be array of each observation,
        //but here we're observing only the last element so param[0]
        console.log(param);
        // isIntersecting will be true for the last element
        if (param[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageNumber((pageNumber) => pageNumber + 1);
        }
      },
      { threshold: 1 } // threshold:1 will make the observer to observe when image is 100 appeared.
    );

    const lastImage = document.querySelector(".img-container:last-child");
    if (!lastImage) return;
    observer.observe(lastImage);

    //cleanup logic
    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [images]);

  return (
    <div>
      {images.map((imageData) => (
        <div key={imageData.id} className="img-container">
          <img src={imageData.download_url} alt="" className="image-list" />
        </div>
      ))}
    </div>
  );
};

export default ImageScroller;
