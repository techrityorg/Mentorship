import { useContext, useEffect, useCallback } from "react";
import About from "../../components/About/AboutUs/About";
import Header from "../../components/About/Header/Header";
import Stats from "../../components/About/Stats/Stats";
import Story from "../../components/About/Story/Story";
import Team from "../../components/About/Team/Team";
import style from "./AboutPage.module.css";
import Footer from "../../components/Footer/Footer";
import StoreContext from "../../store/store-context";

const AboutPage = () => {
  const { update, homePageState } = useContext(StoreContext);

  const deactivate = useCallback(() => {
    update({ type: "OFF" });
  }, [update]);

  useEffect(() => {
    document.querySelector(".loaderBox").style.display = "none";
    if (homePageState) return;
    deactivate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Story />
      <Stats />
      <Team />
      <About />
      <div className={style.footerWrapper}>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
