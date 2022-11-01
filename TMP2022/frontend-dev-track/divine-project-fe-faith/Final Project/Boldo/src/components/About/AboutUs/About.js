import { useRef } from "react";
import useAnimate from "../../../hooks/useAnimate";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import style from "./About.module.css";

const About = () => {
  const subRef = useRef();
  const headerRef = useRef();
  const titleRef1 = useRef();
  const contentRef1 = useRef();
  const titleRef2 = useRef();
  const contentRef2 = useRef();
  const titleRef3 = useRef();
  const contentRef3 = useRef();

  useAnimate(subRef);
  useAnimate(headerRef);
  useAnimate(titleRef1);
  useAnimate(contentRef1);
  useAnimate(titleRef2);
  useAnimate(contentRef2);
  useAnimate(titleRef3);
  useAnimate(contentRef3);

  const isVisible = useIntersectionObserver(headerRef);

  return (
    <div className={style.aboutWrapper}>
      <div className={style.aboutContainer}>
        <div className={style.aboutHeader}>
          <span className={style.subTitle} ref={subRef}>
            Our Blog
          </span>
          <h1 className={style.title} ref={headerRef}>
            Value proposition accelerator product management venture
          </h1>
        </div>

        <section
          className={`${style.AboutMain} ${isVisible && style.mainAnimate}`}
        >
          <div className={style.aboutContent}>
            <h1 className={style.aboutTitle} ref={titleRef1}>
              We are <span className={style.unique}>committed.</span>
            </h1>
            <p className={style.content} ref={contentRef1}>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>

          <div className={style.aboutContent}>
            <h1 className={style.aboutTitle} ref={titleRef2}>
              We are <span className={style.unique}>responsible.</span>
            </h1>
            <p className={style.content} ref={contentRef2}>
              Mass market iPhone buzz conversion analytics stock iteration
              responsive web design user experience business plan handshake.
              Return on investment seed round MVP backing supply chain.
            </p>
          </div>

          <div className={style.aboutContent}>
            <h1 className={style.aboutTitle} ref={titleRef3}>
              We aim for <span className={style.unique}>progress.</span>
            </h1>
            <p className={style.content} ref={contentRef3}>
              Bootstrapping rockstar first mover advantage business model canvas
              alpha deployment launch party beta facebook metrics gamification
              growth hacking customer focus.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
