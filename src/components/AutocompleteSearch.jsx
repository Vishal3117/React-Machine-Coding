import React, { useEffect, useRef, useState } from "react";

const STATE = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

const AutocompleteSearch = () => {
  const [query, setQuery] = useState("");
  const [dataList, setDataList] = useState([]);
  const [status, setStatus] = useState(STATE.LOADING);

  //implementing caching if the user repeats the query, in such cases rather than making an api call we need to fetch the result from the cache
  const cache = useRef({});

  //let's user take a one sec pause after typing 'hell' and then he press 'o' to get the data for hello,
  //but since we've no control on the network call, the request for 'hell' has also been sent, so there's is memory leak
  // to handle the above cases we need to abort such requests
  const abortController = new AbortController();
  const { signal } = abortController;

  const fetchData = async () => {
    try {
      setStatus(STATE.LOADING);

      //first check in cache
      if (cache.current[query]) {
        console.log("cache response:",cache.current[query]);
        setDataList(cache.current[query]);
        setStatus(STATE.SUCCESS);
        return;
      }
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=10`,
        { signal }
      );
      const data = await res.json();
      setStatus(STATE.SUCCESS);
      cache.current[query] = data.products; //storing the response in cache w.r.t the query as key-value pair
      setDataList(data.products);
    } catch (error) {
      //if user types very fast abort controller gives an error, in such cases we don't need to show error
      if (error.name !== "AbortError") {
        setStatus(STATE.ERROR);
      }
    }
  };

  useEffect(() => {
    const timerId = setTimeout(fetchData, 1000); //Debouncing

    //this will clear the timer for the last setTimeout in case user types another character or change the query string
    return () => {
      clearTimeout(timerId); //clearing timer in case the query got change before 1 second
      abortController.abort();
    };
  }, [query]);

  return (
    <div>
      <div>AutocompleteSearch</div>
      <input
        type="text"
        placeholder="search..."
        className="search-input"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />

      {status === STATE.LOADING && <p>Loading ...</p>}

      {status === STATE.ERROR && <p>Something went wrong !!</p>}

      {status === STATE.SUCCESS && (
        <ul>
          {dataList.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteSearch;
