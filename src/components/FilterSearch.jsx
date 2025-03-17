import React, { useState } from "react";
import fruits from "../Data/fruitList";

const FilterSearch = () => {
  const [searchText, setSearchText] = useState("");
  // const [fruitList, setFruitList] = useState(fruits);

  const searchFruit = (event) => {
    setSearchText(event.target.value);
  };

  let filteredList = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h4>Fruit List</h4>
      <div>
        <input
          type="text"
          placeholder="Search fruits"
          value={searchText}
          onChange={searchFruit}
        />
      </div>
      <div>
        <ul>
          {filteredList.length ? (
            filteredList.map((fruit) => <li key={fruit}>{fruit}</li>)
          ) : (
            <p>No Match found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilterSearch;
