import { useContext, useEffect, useRef } from "react";
import style from "./Header.module.css";
import Navigation from "../../Navigation/Navigation";
import Illustration from "./Illustration";
import Marquee from "./Marquee";
import useSplitting from "../../../hooks/useSplitting";
import StoreContext from "../../../store/store-context";

const Header = () => {
  const { homePageState } = useContext(StoreContext);
  const headerRef = useRef();
  const textRef = useRef();
  const navigationRef = useRef();
  const buyTemplateRef = useRef();
  const exploreRef = useRef();

  useSplitting(headerRef);
  useSplitting(textRef);

  useEffect(() => {
    if (homePageState) {
      setTimeout(() => {
        headerRef.current.classList.add(style.headerTitleChange);
        textRef.current.classList.add(style.headerContextChange);
        buyTemplateRef.current.classList.add(style.buyTemplateChange);
        exploreRef.current.classList.add(style.exploreChange);
      }, 1500);
    }
  }, [homePageState]);

  return (
    <div className={style.wrapper}>
      <div className={style.headerContainer}>
        <Navigation light={true} />

        <section className={style.headerWrapper}>
          <div className={style.header}>
            <div className={style.headerMain}>
              <header className={style.headerTextBox}>
                <h1
                  className={style.headerTitle}
                  data-splitting="lines"
                  ref={headerRef}
                >
                  Save time by building fast with Boldo Template
                </h1>
              </header>
              <p
                className={style.headerContext}
                data-splitting="lines"
                ref={textRef}
              >
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>

              <div className={style.headerNavigation} ref={navigationRef}>
                <button className={style.buyTemplate} ref={buyTemplateRef}>
                  Buy template
                </button>
                <button className={style.explore} ref={exploreRef}>
                  Explore
                </button>
              </div>
            </div>
          </div>

          <Illustration homePageState={homePageState} />
        </section>
        <Marquee homePageState={homePageState} />
      </div>
    </div>
  );
};

export default Header;
