import { useRef } from "react";
import style from "./Header.module.css";
import Navigation from "../../Navigation/Navigation";
import useAnimate from '../../../hooks/useAnimate'

const Header = () => {
  const headerRef = useRef();
  const contentRef = useRef();

  useAnimate(headerRef, style.titleChange);
  useAnimate(contentRef, style.content)

  return (
    <div className={style.aboutHeaderWrapper}>
      <div className={style.aboutHeaderMain}>
        <Navigation light={true} />
        <section className={style.aboutHeader}>
          <h1 className={style.title} ref={headerRef}>
            We love to make great things, things that matter.
          </h1>
          <p className={style.content} ref={contentRef}>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Header;
