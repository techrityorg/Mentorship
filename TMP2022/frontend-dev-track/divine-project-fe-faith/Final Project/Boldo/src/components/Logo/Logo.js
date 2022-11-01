import { Link } from "react-router-dom";

import { BoldoLogo } from "../../assets/Svg";
import style from "./Logo.module.css";

const Logo = (props) => {
  const textColor = props.value ? "#ffffff" : "#0a2640";

  return (
    <Link to="/" className={style.logo}>
      <span className={style.logoInner}>
        <BoldoLogo color={props.value} />
      </span>
      <span className={style.logoText} style={{ color: textColor }}>
        Boldo
      </span>
    </Link>
  );
};

export default Logo;
