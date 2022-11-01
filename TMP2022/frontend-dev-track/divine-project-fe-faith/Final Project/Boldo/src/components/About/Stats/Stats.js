import { useEffect, useRef} from "react";
import style from "./Stats.module.css";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Stats = () => {
  const numRef = useRef();
  const userRef = useRef();

  const numIsVisible = useIntersectionObserver(numRef);
  const userisVisible = useIntersectionObserver(numRef);

  const func = (elementRef, startPoint, interval, endPoint, ms) => {
    const see = setInterval(() => {
      startPoint += interval;
      elementRef.current.textContent = startPoint;
      if (startPoint === endPoint) return clearInterval(see);
    }, ms);
  };

  useEffect(() => {
    if (numIsVisible) {
      func(numRef, 0, 5, 120, 50);
    }
    if (userisVisible) {
      func(userRef, 0, 10, 240, 50);
    }
  }, [numIsVisible, userisVisible]);

  return (
    <div className={style.statsWrapper}>
      <section className={style.statsMain}>
        <span className={style.subTitle}>Our numbers</span>
        <h1 className={style.title}>
          An enterprise template to ramp up your company website
        </h1>

        <div className={style.stats}>
          <div className={style.counter}>
            <span className={style.value}>
              <span className={style.revenueValue} ref={numRef}>
                0
              </span>
              m
            </span>
            <span className={style.name}>Revenues</span>
          </div>

          <div className={style.counter}>
            <span className={style.value}>10.000</span>
            <span className={style.name}>Units</span>
          </div>

          <div className={style.counter}>
            <span className={style.value} ref={userRef}>
              240
            </span>
            <span className={style.name}>Users</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
