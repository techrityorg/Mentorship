import style from "./Navigation.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Hamburger from "../../assets/Hamburger.svg";
import { useRef } from "react";

const Navigation = (props) => {
  const navRef = useRef();

  const classes = props.light
    ? style.navigation
    : `${style.navigation} ${style.light}`;

  const hamburgerClasses = props.light
    ? style.hamburger
    : `${style.hamburger} ${style.hamburgerLight}`;

  const activate = (e) => {
    e.target.classList.toggle(`${style.active}`);
    navRef.current.classList.toggle(`${style.show}`);
  };

  return (
    <div className={style.navigationContainer}>
      <Logo value={props.light} />
      <nav className={classes} ref={navRef}>
        <Link to="/blog">Blog</Link>
        <a href="#.com">Products</a>
        <Link to="/about">About</Link>
        <button>Log in</button>
      </nav>
      <button
        className={hamburgerClasses}
        arial-hidden="true"
        onClick={activate}
      >
        <img src={Hamburger} alt="toggle btn" />
      </button>
    </div>
  );
};

export default Navigation;
