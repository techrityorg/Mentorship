import { useCallback, useContext, useEffect } from "react";
import Article from "../../components/Blog/Article/Article";
import BlogHeader from "../../components/Blog/BlogHeader/BlogHeader";
import Footer from "../../components/Footer/Footer";
import StoreContext from "../../store/store-context";
import style from "./BlogPage.module.css";

const BlogPage = () => {
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
    <div className={style.wrapper}>
      <BlogHeader />
      <Article />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
