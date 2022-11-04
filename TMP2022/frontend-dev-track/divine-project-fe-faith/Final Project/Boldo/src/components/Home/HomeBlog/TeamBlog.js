import style from "./TeamBlog.module.css";
import TeamBlogSlide from "./TeamBlogSlide";
import { teamData } from "../../../data/data";
import { useRef } from "react";
import useAnimate from "../../../hooks/useAnimate";

const TeamBlog = () => {
  const headerRef = useRef();

  const textRef = useRef();

  useAnimate(headerRef);
  useAnimate(textRef, "textAnimate");


  return (
    <section className={style.teamBlog}>
      <div className={style.header}>
        <h1 className={style.headerTitle} ref={headerRef}>
          Our Blog
        </h1>
        <p className={style.headerText} ref={textRef}>
          Value proposition accelerator product management venture
        </p>
      </div>

      <div className={style.blogWrapper}>
        {teamData.map((el, i) => (
          <TeamBlogSlide
            key={i}
            image={el.bgPic}
            title={el.title}
            profilePic={el.profilePic}
            name={el.name}
          />
        ))}
      </div>
      <button className={style.loadBtn}>Load More</button>
    </section>
  );
};

export default TeamBlog;
