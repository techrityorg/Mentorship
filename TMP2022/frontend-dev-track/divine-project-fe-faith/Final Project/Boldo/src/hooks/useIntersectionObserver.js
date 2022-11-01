import { useEffect, useMemo, useState } from "react";

const useIntersectionObserver = (elementRef) => {
  const [isVisible, setIsVisible] = useState(false);

  const obj = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  }, []);
  const observeFunc = (entries, observe) => {
    const [entry] = entries;

    
    if (entry.isIntersecting) {
      setIsVisible(true);
      observe.unobserve(entry.target);
    }
  };

  useEffect(() => {
    const observeElement = new IntersectionObserver(observeFunc, obj);
    observeElement.observe(elementRef.current);
  }, [elementRef, obj]);

  return isVisible;
};

export default useIntersectionObserver;
