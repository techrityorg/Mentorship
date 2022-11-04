import { useRef } from "react";
import useAnimate from "../../../hooks/useAnimate";
import Gallery from "./Gallery";
import style from "./Story.module.css";

const Story = () => {
  const headerRef = useRef();
  const subHeaderRef = useRef();
  const textRef = useRef();

  useAnimate(headerRef)
  useAnimate(subHeaderRef)
  useAnimate(textRef)

  return (
    <div className={style.storyWrapper}>
      <section className={style.storyContainer}>
        <Gallery />
        <div className={style.storyMain}>
          <span className={style.subTitle} ref={headerRef}>
            Our Story
          </span>
          <h1 className={style.title} ref={subHeaderRef}>
            Handshake infographic mass market crowdfunding iteration.
          </h1>
          <p className={style.text} ref={textRef}>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Story;
