import { useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import useSplitting from "./useSplitting";

const useAnimate = (elementRef, className = "titleAnimate") => {
  useSplitting(elementRef);

  const isElementVisible = useIntersectionObserver(elementRef);

  useEffect(() => {
    if (isElementVisible) {
      elementRef.current.classList.add(className);
    }
  }, [className, elementRef, isElementVisible]);
};

export default useAnimate;
