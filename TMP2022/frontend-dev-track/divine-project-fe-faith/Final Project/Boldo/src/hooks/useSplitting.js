import { useEffect } from "react";
import Splitting from "splitting";

const useSplitting = (refValue) => {
  useEffect(() => {
    const [element] = Splitting({ target: refValue.current, by: "lines" });
    element.words.map(
      (el) => (el.innerHTML = `<span class=''>${el.innerText}</span>`)
    );
  }, [refValue]);
};

export default useSplitting;
