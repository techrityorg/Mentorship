import {useRef } from "react";
import style from "./Service.module.css";
import Detail from "./Detail";
import Feature from "./Feature";
import useAnimate from "../../../hooks/useAnimate";


const Service = () => {
  const titleRef = useRef();
  const contentRef = useRef();

  useAnimate(titleRef, style.textAnimate);
  useAnimate(contentRef, style.textAnimate);


  return (
    <div className={style.wrapper}>
      <div className={style.serviceContainer}>
        <div className={style.service}>
          <header>
            <h1
              className={`${style.title}`}
              ref={titleRef}
            >
              Our Services
            </h1>
          </header>
          <p className={`${style.content}`} ref={contentRef}>
            Handshake infographic mass market crowdfunding iteration.
          </p>
        </div>

        <Feature />
        <Detail />
      </div>
    </div>
  );
};

export default Service;
