import "./App.css";
import data from "./Data/explorer.json";
import Explorer from "./components/Explorer";
import FilterSearch from "./components/FilterSearch";
import ProgressBar from "./components/ProgressBar";
import UseCallbackHook from "./concepts/UseCallbackHook";
import UseMemoHook from "./concepts/UseMemoHook";
import UseRefHook from "./concepts/UseRefHook";
import UseSWRHook from "./concepts/UseSWRHook";

function App() {
  // const bars = [2, 5, 20, 40, 50, 75, 100];
  return (
    <>
      <div style={{ width: "100%" }}>
        {/* <FilterSearch /> */}
        {/* {bars.map((bar) => (
          <ProgressBar progress={bar} />
        ))} */}
        {/* <Explorer data={data} /> */}
        {/* <UseMemoHook /> */}
        {/* <UseRefHook /> */}
        {/* <UseCallbackHook /> */}
        <UseSWRHook />
      </div>
    </>
  );
}

export default App;
