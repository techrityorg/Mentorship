/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Feature.module.css";
import pic1 from "../../../assets/feature1.svg";
import pic2 from "../../../assets/feature2.svg";
import pic3 from "../../../assets/feature3.svg";
import FeatureSlide from "./FeatureSlide";

const data = [
  {
    title: "Cool feature title",
    text: "  Learning curve network effects return on investment.",
    pic: pic1,
  },
  {
    title: "Even cooler feature",
    text: "  Learning curve network effects return on investment.",
    pic: pic2,
  },
  {
    title: "Cool feature title",
    text: "  Learning curve network effects return on investment.",
    pic: pic3,
  },
];

const Feature = () => {
  return (
    <div className={style.feature}>
      {data.map((el, i) => (
        <FeatureSlide
          pic={el.pic}
          title={el.title}
          text={el.text}
          key={i}
          value={i}
        />
      ))}
    </div>
  );
};

export default Feature;
