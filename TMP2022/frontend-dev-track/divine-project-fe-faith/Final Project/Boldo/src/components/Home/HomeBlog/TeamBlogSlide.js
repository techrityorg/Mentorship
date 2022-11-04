import style from "./TeamBlogSlide.module.css";

const TeamBlogSlide = (props) => {
  return (
    <div className={style.blogCard}>
      <figure className={style.blogPicBox}>
        <img src={props.image} alt="" />
      </figure>

      <div className={style.blogDetail}>
        <h3>Category</h3>
        <span>
          <time>January 28, 2022</time>
        </span>
      </div>

      <div className={style.blogInfo}>
        <p aria-label="blog topic">{props.title}</p>
        <div className={style.profile}>
          <figure className={style.profilePic}>
            <img src={props.profilePic} alt="" />
          </figure>
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TeamBlogSlide;
