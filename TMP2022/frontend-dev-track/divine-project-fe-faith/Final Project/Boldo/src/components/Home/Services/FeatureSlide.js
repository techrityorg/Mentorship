/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./FeatureSlide.module.css";
import { Arrow } from "../../../assets/Svg";
import {useContext, useEffect, useRef } from "react";
import StoreContext from "../../../store/store-context";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import useAnimate from "../../../hooks/useAnimate";

const FeatureSlide = (props) => {
  const imgRef = useRef();
  const headerRef = useRef();
  const textRef = useRef();
  const { update } = useContext(StoreContext);

  useAnimate(headerRef);
  useAnimate(textRef, "textAnimate");

  const imgVisible = useIntersectionObserver(imgRef);

  const loadElement = () => {
    update({ type: "ADD", value: 17 });
  };

  useEffect(() => {
    // set new variable to delay transitions
    imgRef.current.style.setProperty("--delay", props.value * 0.5);
  }, [props.value]);

  return (
    <div className={style.featureCard}>
      <figure aria-hidden="true" className={style.figureImg} ref={imgRef}>
        <img
          src={props.pic}
          alt=""
          onLoad={loadElement}
          className={`${style.pic} ${imgVisible && style.picChange}`}
        />
      </figure>

      <div className={style.featureContent}>
        <h1
          className={`${style.title}`}
          ref={headerRef}
        >
          {props.title}
        </h1>
        <p className={`${style.text}`} ref={textRef}>{props.text}</p>

        <a href="" className={style.link}>
          Explore page
          <span className={style.svg}>
            <Arrow />
          </span>
        </a>
      </div>
    </div>
  );
};

export default FeatureSlide;
