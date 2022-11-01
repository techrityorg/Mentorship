import style from "./Gallery.module.css";
import manWebp from "../../../assets/man.webp";
import manPng from "../../../assets/man.png";
import womanWebp from "../../../assets/woman.webp";
import womanPng from "../../../assets/woman.png";
import peopleWebp from "../../../assets/people-gathering.webp";
import peoplePng from "../../../assets/people-gathering.png";
import walkingMan from "../../../assets/gallery-green.svg";
import staringPic from "../../../assets/staring-man.svg";

const Gallery = () => {
  return (
    <div className={style.gallery}>
      <figure className={style.storyGallery} aria-hidden="true">
        <picture>
          <source srcSet={manWebp} type="image/webp" />
          <img src={manPng} className={style.image} alt="" />
        </picture>
      </figure>

      <figure className={style.storyGallery} aria-hidden="true">
        <picture>
          <source srcSet={womanWebp} type="image/webp" />
          <img src={womanPng} className={style.image} alt="" />
        </picture>
      </figure>

      <figure className={style.storyGallery} aria-hidden="true">
        <picture>
          <source srcSet={peopleWebp} type="image/webp" />
          <img src={peoplePng} className={style.image} alt="" />
        </picture>
      </figure>

      <figure className={style.storyGallery} aria-hidden="true">
        <img src={walkingMan} className={style.image} alt="" />
      </figure>

      <figure className={style.storyGallery} aria-hidden="true">
        <img src={staringPic} className={style.image} alt="" />
      </figure>
      
    </div>
  );
};

export default Gallery;
