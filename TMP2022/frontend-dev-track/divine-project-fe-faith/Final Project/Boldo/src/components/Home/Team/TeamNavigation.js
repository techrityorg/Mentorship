import style from "./TeamNavigation.module.css";
import { Arrow } from "../../../assets/Svg";
import { useSwiper } from "swiper/react";
import { useRef } from "react";
import useAnimate from "../../../hooks/useAnimate";

const TeamNavigation = () => {
  const swiper = useSwiper();

  const headerRef = useRef();
  const btnRef = useRef();
  useAnimate(headerRef)
  useAnimate(btnRef, style.sliderNavigationAnimate);

  return (
    <div className={style.sliderHeader}>
      <h1 className={style.sliderTitle} ref={headerRef}>
        An enterprise template to ramp up your company website
      </h1>
      <div className={style.sliderNavigation} ref={btnRef}>
        <button className={style.leftBtn} onClick={() => swiper.slidePrev()}>
          <Arrow />
        </button>
        <button className={style.rightBtn} onClick={() => swiper.slideNext()}>
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export default TeamNavigation;
