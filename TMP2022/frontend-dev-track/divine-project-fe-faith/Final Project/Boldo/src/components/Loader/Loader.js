import { useContext, useEffect, useRef } from "react";
import StoreContext from "../../store/store-context";
import style from "./Loader.module.css";
import LoaderWave from "./LoaderWave";

const Loader = () => {
  const { elementValue, homePageState } = useContext(StoreContext);
  const containerRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    if (homePageState) {
      setTimeout(() => {
        boxRef.current.classList.add(style.homeAnimate);
      }, 500);
      setTimeout(() => {
        containerRef.current.classList.add(style.disabledHome);
      }, 1700);
    }
  }, [homePageState]);

  return (
    <div
      className={`${style.homeBox} loaderBox`}
      ref={containerRef}
      aria-hidden="true"
      >
      <div className={style.home} ref={boxRef}>
        <div className={style.counter} style={{ height: `${elementValue}%` }}>
      <LoaderWave />
        </div>
      </div>
      <div className={style.valuePercent}>
        {elementValue}
        <span>%</span>
      </div>
      <div className={style.title}>Redefine your brand...</div>
    </div>
  );
};

export default Loader;
