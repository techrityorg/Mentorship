import style from "./Slide.module.css";

const Slide = (props) => {
  return (
    <div className={style.slideBox}>
      <p className={style.slideText}>{props.text}</p>
      <div className={style.slideDetail}>
        <figure className={style.pic}>
          <img src={props.pic} alt={`${props.name} pic`} />
        </figure>
        <div className={style.slideInfo}>
          <h3 className={style.name}>{props.title}</h3>
          <p className={style.job}>{props.job}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
