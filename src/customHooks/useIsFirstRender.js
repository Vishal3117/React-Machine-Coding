import { useEffect, useRef } from "react";

const useIsFirstRender = () => {
  let ref = useRef(true);

  useEffect(() => {
    const firstRender = ref.current;
    if (firstRender) {
      ref.current = false;
      console.log("First Render");
    } else {
      console.log("Not a first Render");
    }
  }, []);

  return ref.current;
};

export default useIsFirstRender;
