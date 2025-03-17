import "./App.css";
import data from "./Data/explorer.json";
import Explorer from "./components/Explorer";
import FilterSearch from "./components/FilterSearch";
import ProgressBar from "./components/ProgressBar";

function App() {
  // const bars = [2, 5, 20, 40, 50, 75, 100];
  return (
    <>
      <div style={{ width: "100%" }}>
        {/* <FilterSearch /> */}
        {/* {bars.map((bar) => (
          <ProgressBar progress={bar} />
        ))} */}
        <Explorer data={data} />
      </div>
    </>
  );
}

export default App;
