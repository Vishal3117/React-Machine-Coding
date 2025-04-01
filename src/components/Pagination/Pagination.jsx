import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  const prevThreePages = Array.from(
    { length: 3 },
    (_, index) => pageNumber - 1 - index
  )
    .filter((value) => value > 0)
    .reverse();

  const nextThreePages = Array.from(
    { length: 4 },
    (_, index) => pageNumber + index
  );

  const pageIndex = [...prevThreePages, ...nextThreePages];
  return (
    <div className="pagination-container">
      {pageNumber > 1 && (
        <div
          className="page-btn"
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
        >
          {"<"}
        </div>
      )}
      {pageIndex.map((pgIndex) => (
        <div
          className={pgIndex === pageNumber ? "page-btn-active" : "page-btn"}
          onClick={() => {
            setPageNumber(pgIndex);
          }}
        >
          {pgIndex}
        </div>
      ))}

      <div
        className="page-btn"
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        {">"}
      </div>
    </div>
  );
};

export default Pagination;
