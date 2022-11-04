import style from "./DetailList.module.css";

import { Tick } from "../../../assets/Svg";
import { useRef } from "react";
import useAnimate from "../../../hooks/useAnimate";

const DetailList = (props) => {

  const listRef = useRef();

  useAnimate(listRef)



  return (
    <li className={style.mainList} ref={listRef}>
      <span className={style.svg}>
        <Tick />
      </span>
      <span className={style.mainInfo}>{props.text}</span>
    </li>
  );
};

export default DetailList;
