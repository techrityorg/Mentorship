import { useRef } from "react";
import Staff from "./Staff";
import style from "./Team.module.css";
import useAnimate from '../../../hooks/useAnimate';

const Team = () => {

  const subRef = useRef();
  const headerRef = useRef();
  const textRef = useRef();

  useAnimate(subRef)
  useAnimate(headerRef)
  useAnimate(textRef)

  return (
    <div className={style.teamWraper}>
      <section className={style.teamBox}>
        <div className={style.header}>
          <span className={style.subTitle} ref={subRef}>Our Team</span>
          <h1 className={style.title} ref={headerRef}>The Leadership team</h1>
          <p className={style.text} ref={textRef}>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
        
        <Staff />
      </section>
    </div>
  );
};

export default Team;
