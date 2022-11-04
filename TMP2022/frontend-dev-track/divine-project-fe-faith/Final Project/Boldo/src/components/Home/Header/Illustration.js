import illustration_pic from "../../../assets/header-illustration.webp";
import illustration_png from "../../../assets/header-illustration.png";

import style from "./Illustration.module.css";
import { useContext, useEffect, useRef } from "react";
import StoreContext from "../../../store/store-context";

const Illustration = ({ homePageState }) => {
  const { update } = useContext(StoreContext);
  const imgRef = useRef();

  const loadElement = () => {
    update({ type: "ADD", value: 7 });
  };

  useEffect(() => {
    if (homePageState) {
      setTimeout(() => {
        imgRef.current.classList.add(style.illustrationChange);
      }, 2000);
    }
  }, [homePageState]);

  return (
    <div className={style.illustration} ref={imgRef}>
      <figure>
        <picture>
          <source srcSet={illustration_pic} type="image/webp" />
          <img src={illustration_png} alt="" onLoad={loadElement} />
        </picture>
      </figure>
    </div>
  );
};

export default Illustration;
