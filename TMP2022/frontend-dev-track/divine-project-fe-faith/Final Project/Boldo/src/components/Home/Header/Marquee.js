import { useEffect, useRef } from "react";
import Mar from "react-fast-marquee";

import style from "./Marquee.module.css";
import first_pic from "../../../assets/61f32c9adbf69c205b427c5e_Boldo.png";
import second_pic from "../../../assets/61f32c7dd27f127a40e6bf26_Presto.png";

const Marquee = ({homePageState}) => {
const boxRef = useRef();

useEffect(() => {
  if (homePageState) {
    setTimeout(() => {
      boxRef.current.classList.add(style.visible);
    }, 2000);
  }
}, [homePageState]);

  return (
    <div ref={boxRef} className={style.boxContainer}>
      <Mar
        className={style.headerMarquee}
        gradientColor={[10, 38, 64]}
        gradientWidth={100}
        speed={80}
      >
        <span className={style.element}>
          <img src={first_pic} alt="" />
        </span>
        <span className={style.element}>
          <img src={second_pic} alt="" />
        </span>
        <span className={style.element}>
          <img src={first_pic} alt="" />
        </span>
        <span className={style.element}>
          <img src={second_pic} alt="" />
        </span>
        <span className={style.element}>
          <img src={first_pic} alt="" />
        </span>
        <span className={style.element}>
          <img src={second_pic} alt="" />
        </span>
        <span className={style.element}>
          <img src={first_pic} alt="" />
        </span>
        <span className={style.element}>
          <img src={second_pic} alt="" />
        </span>
        <span className={style.element}>
          <img src={first_pic} alt="" />
        </span>
        <span className={style.element}>
          <img src={second_pic} alt="" />
        </span>
      </Mar>
    </div>
  );
};

export default Marquee;
