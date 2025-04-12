import React, { useEffect, useState } from "react";
import ImageScroller from "./ImageScroller";

const InfiniteScroll = () => {
  const [imageList, setImageList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  // const fetchImage = async () => {
  //   const res = await fetch(
  //     `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
  //   );
  //   const result = await res.json();
  //   console.log(result);
  //   setImageList((prev) => [...prev, ...result]);
  //   console.log(imageList);
  // };

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=5`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setImageList((prev) => [...prev, ...arr]);
        console.log(arr);
      });
      console.log(imageList)
  }, [pageNumber]);

  return <ImageScroller images={imageList} setPageNumber={setPageNumber} />;
};

export default InfiniteScroll;
