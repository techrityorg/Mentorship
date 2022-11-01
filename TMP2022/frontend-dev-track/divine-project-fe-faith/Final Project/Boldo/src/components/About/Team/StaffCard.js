import style from "./StaffCard.module.css";

const StaffCard = (props) => {
  return (
    <div className={style.staffCard}>
      <figure className={style.staffImage}>
        <picture>
          <source srcSet={props.webp} type="image/webp" />
          <img src={props.png} alt="Micheal Scott pic" />
        </picture>
      </figure>

      <h1 className={style.title}>{props.name}</h1>
      <p className={style.job}>{props.job}</p>
    </div>
  );
};


export default StaffCard;