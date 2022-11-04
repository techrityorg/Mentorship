import Logo from "../Logo/Logo";
import style from "./FooterNavigation.module.css";

const FooterNavigation = () => {
  return (
    <section className={style.FooterNavigation}>
      <div className={style.aboutBox}>
        <Logo value={false} />
        <p className={style.aboutText}>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
      </div>

      <nav className={style.navigation}>
        <div className={style.navBox}>
          <h3 className={style.navHeader}>Landings</h3>
          <a href="#Home">Home</a>
          <a href="#Products">Products</a>
          <a href="#Services">Services</a>
        </div>
        <div className={style.navBox}>
          <h3 className={style.navHeader}>Company</h3>
          <a href="#Home">Home</a>
          <a href="#Careers" className={style.careerTag}>
            Careers <span className={style.hiringTag}>Hiring!</span>
          </a>
          <a href="#Services">Services</a>
        </div>

        <div className={style.navBox}>
          <h3 className={style.navHeader}>Resources</h3>
          <a href="#Blog">Blog</a>
          <a href="#Home">Products</a>
          <a href="#Home">Services</a>
        </div>
      </nav>

      <div className={style.privacy}>All rights reserved.</div>
    </section>
  );
};

export default FooterNavigation;
