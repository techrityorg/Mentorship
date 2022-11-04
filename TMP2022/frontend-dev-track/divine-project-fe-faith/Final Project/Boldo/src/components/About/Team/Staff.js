import style from "./Staff.module.css";
import staffData from "../../../data/staffData";
import StaffCard from "./StaffCard";

const Staff = () => {

  return (
    <div className={style.staffContainer}>
      {staffData.map((el, i) => (
        <StaffCard
          key={i}
          name={el.name}
          job={el.job}
          webp={el.image.webp}
          png={el.image.png}
        />
      ))}
    </div>
  );
};

export default Staff;
