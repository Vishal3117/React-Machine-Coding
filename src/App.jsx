import "./App.css";
import AutocompleteSearch from "./components/AutocompleteSearch";
// import data from "./Data/explorer.json";
import Explorer from "./components/Explorer";
import FilterSearch from "./components/FilterSearch";
import ImageCarousel from "./components/ImageCarousel";
import InfiniteScroll from "./components/InfiniteScroller/InfiniteScroll";
import OTPInput from "./components/OTPInput";
import PaginatedPost from "./components/Pagination/PaginatedPost";
import ProgressBar from "./components/ProgressBar";
import StarRating from "./components/StarRating";
import ToastContainer from "./components/Toast/ToastContainer";
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
        {/* <UseSWRHook /> */}
        {/* <ToastContainer /> */}
        {/* <StarRating starCount={10}/> */}
        {/* <PaginatedPost /> */}
        {/* <OTPInput /> */}
        {/* <ImageCarousel /> */}
        {/* <AutocompleteSearch /> */}
        <InfiniteScroll />
      </div>
    </>
  );
}

export default App;
