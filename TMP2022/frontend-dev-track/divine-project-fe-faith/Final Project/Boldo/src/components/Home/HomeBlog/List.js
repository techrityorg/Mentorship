import style from "./List.module.css";
import { ArrowDown } from "../../../assets/Svg";
import React, { useEffect, useRef } from "react";
import useAnimate from "../../../hooks/useAnimate";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const List = (props) => {
  const dropDownRef = useRef();
  const svgRef = useRef();
  const textRef = useRef();
  const containerRef = useRef();
  useAnimate(textRef, style.headerAnimate);

  const isContainerVisible = useIntersectionObserver(containerRef)

  const func = () => {
    dropDownRef.current.classList.toggle(style.hiddenList);
    svgRef.current.classList.toggle(style.inverted);
  };

  useEffect(() => {
    containerRef.current.style.setProperty(
      "--value",
      props.value * 0.5
    );
  }, [props.value]);

  return (
    <li
      className={`${style.list} ${isContainerVisible && style.boxAnimate}`}
      onClick={func}
      ref={containerRef}
    >
      <div className={style.listItem}>
        <span ref={textRef} className={style.header}>
          We connect our customers with the best?
        </span>
        <span
          className={`${style.arrowDown} ${isContainerVisible && style.arrowAnimate}`}
          ref={svgRef}
        >
          {<ArrowDown />}
        </span>
      </div>

      <div className={style.listDropDown} ref={dropDownRef}>
        We connect our customers with the best, and help them keep up-and stay
        open.
      </div>
    </li>
  );
};

export default List;
