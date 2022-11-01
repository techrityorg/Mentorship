import style from "./OtherDetail.module.css";
import womanPicWebp from "../../../assets/smiling-woman.webp";
import womanPicPng from "../../../assets/smiling-woman.png";
import { Sun, Eye, Star } from "../../../assets/Svg";
import { useRef } from "react";
import useAnimate from "../../../hooks/useAnimate";

const OtherDetailList = (props) => {
  const textRef = useRef(); 
  useAnimate(textRef);
  
  return (
    <li className={style.list} ref={textRef}>
      <span className={style.svg}>{props.logo}</span>
      <span className={style.text}>{props.text}</span>
    </li>
  );
};

const OtherDetail = () => {
  const headerRef = useRef();

  useAnimate(headerRef);

  return (
    <div className={style.otherDetailContainer}>
      <h1 className={style.header} ref={headerRef}>
        We connect our customers with the best, and help them keep up-and stay
        open.
      </h1>
      <ul className={style.listBox}>
        <OtherDetailList
          logo={<Star />}
          text="We connect our customers with the best."
        />
        <OtherDetailList
          logo={<Eye />}
          text="Advisor success customer launch party."
        />
        <OtherDetailList
          logo={<Sun />}
          text="Business-to-consumer long tail."
        />
      </ul>

      <figure className={style.image}>
        <picture>
          <source srcSet={womanPicWebp} type="image/webp" />
          <img
            src={womanPicPng}
            alt="A woman smiling with a phone on her ear"
          />
        </picture>
      </figure>
    </div>
  );
};

export default OtherDetail;
