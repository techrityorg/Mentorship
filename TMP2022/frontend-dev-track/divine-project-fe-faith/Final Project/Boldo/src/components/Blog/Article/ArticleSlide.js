import style from "./ArticleSlide.module.css";

const ArticleSlide = (props) => {
  return (
    <div className={style.articleCard}>
      <figure className={style.articlePic}>
        <img src={props.blogPic} alt="" />
      </figure>
      <div className={style.articleSelection}>
        <h1 className={style.category}>Category</h1>
        <time className={style.time}>November 22, 2021</time>
      </div>
      <p className={style.text}>{props.text}</p>

      <div className={style.author}>
        <img src={props.avi} alt="" />
        <p>{props.name}</p>
      </div>
    </div>
  );
};


export default ArticleSlide;
