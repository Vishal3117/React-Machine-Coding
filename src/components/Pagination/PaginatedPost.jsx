import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";

const PaginatedPost = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  

  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${pageNumber}&limit=5`)
      .then((response) => {
        setData(response.data); // Logs the actual data
      });
  }, [pageNumber]);

  return (
    <div className="container">
      <div>This is post 1</div>

      <div className="post-container">
        {data.map((item, index) => (
          <img key={index} src={item.download_url} />
        ))}
      </div>

      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
};

export default PaginatedPost;
