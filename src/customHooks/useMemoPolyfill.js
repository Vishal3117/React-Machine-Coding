import { useEffect, useRef } from "react";

const useCustomMemo = (cb, deps) => {
  //variable/state to store the cached value
  const memoizedRef = useRef(null);

  //logic to compare the change in dependencies
  if (!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }

  // clean our useMemo whenever we close/unmount our component
  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);
  // return the memoized value if any
  return memoizedRef.current.value;
};

export default useCustomMemo;
// things we need -
// 1.) variable/state to store the cached value - ordinary variable or a state will lost its value whenever the state is re-rendered so we'll need 'refs'
// 2.) compare changes in our dependencies
// 3.) clean our useMemo whenever we close/unmount our component
// 4.) return the memoized value if any

const areEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false; //if nothing is there in the prevDeps, we'll juz return false
  //since useMemo dep. is an array, so we'll compare the length of the prev dep array and new dep array to check if there is a change in the dependency.
  if (prevDeps.length !== nextDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false;
    }
  }

  return true;
};
