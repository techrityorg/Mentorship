import style from "./Article.module.css";
import ArticleSlide from "./ArticleSlide";
import { articleData } from "../../../data/ArticleData";

const Article = () => {
  return (
    <div className={style.articleContainer}>
      <h1 className={style.articleHeader}>Latest News</h1>

      <section className={style.articleList}>

        {articleData.map((el, i) => (
          <ArticleSlide
            key={i}
            blogPic={el.blogPic}
            text={el.text}
            avi={el.avi}
            name={el.name}
          />
        ))}
      </section>
    </div>
  );
};

export default Article;
