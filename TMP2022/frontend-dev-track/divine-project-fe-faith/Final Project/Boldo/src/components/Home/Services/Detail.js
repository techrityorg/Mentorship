import style from "./Detail.module.css";
import pic1Webp from "../../../assets/smiling-man.webp";
import pic1Png from "../../../assets/smiling-man.png";
import OtherDetail from "./OtherDetail";
import DetailList from "./DetailList";
import { useContext, useRef } from "react";
import StoreContext from "../../../store/store-context";
import useAnimate from "../../../hooks/useAnimate";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Detail = () => {
  const headerRef = useRef();
  const btnRef = useRef();
  const imgRef = useRef();
  const { update } = useContext(StoreContext);

  useAnimate(headerRef);
  useAnimate(imgRef, style.figureAnimate);

  const isBututonVisible = useIntersectionObserver(btnRef);

  const load = () => {
    update({ type: "ADD", value: 18 });
  };

  return (
    <section className={style.detailContainer}>
      <div className={style.mainDetail}>
        <figure className={style.figure} ref={imgRef}>
          <picture>
            <source srcSet={pic1Webp} type="image/webp" />
            <img
              src={pic1Png}
              alt="A man smiling with his phone on the ear"
              onLoad={load}
            />
          </picture>
        </figure>

        <div className={style.mainContent}>
          <h1 className={style.mainTitle} ref={headerRef}>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>

          <ul className={style.mainText}>
            <DetailList text="We connect our customers with the best." />
            <DetailList text="Advisor success customer launch party." />
            <DetailList text=" Business-to-consumer long tail." />

            <button
              className={`${style.button} ${
                isBututonVisible && style.buttonAnimate
              }`}
              ref={btnRef}
            >
              Start Now
            </button>
          </ul>
        </div>
      </div>

      <OtherDetail />
    </section>
  );
};

export default Detail;
