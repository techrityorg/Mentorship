import style from "./Team.module.css";
import TeamSlider from "./TeamSlider";

const Team = () => {

  return (
    <div className={style.wrapper}>
      <section className={style.sliderContainer}>
        <TeamSlider />
      </section>
    </div>
  );
};

export default Team;
