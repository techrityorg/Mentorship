import style from "./Footer.module.css";
import FooterNavigation from "./FooterNavigation";
import Main from "./Main";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Main />
      <FooterNavigation />
    </footer>
  );
};

export default Footer;
