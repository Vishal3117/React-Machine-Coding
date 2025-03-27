import React from "react";
import useSWR from "swr";
const API_URL = "https://673b3bbb339a4ce4451b41e7.mockapi.io/Students";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const UseSWRHook = () => {
  const { data, error } = useSWR(API_URL, fetcher);

  return (
    <div>
      {data ? (
        data.map((obj) => (
          <div key={obj.id}>Student Name : {obj.studentName}</div>
        ))
      ) : (
        <div>Data Error : {error}</div>
      )}
    </div>
  );
};

export default UseSWRHook;

// https://673b3bbb339a4ce4451b41e7.mockapi.io/Students

//   const fetchData = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error("Fetching data failed", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
