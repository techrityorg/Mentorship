import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide from "./Slide";
import { data } from "../../../data/data";
import TeamNavigation from "./TeamNavigation";

const checkWidth = () => {
  // mobile screen
  if (window.matchMedia("(max-width: 767px)").matches) return 1;
  // desktop screen
  if (window.matchMedia("(min-width: 1200px)").matches) return 3;
  //laptop screen
  if (window.matchMedia("(min-width:768px) and (max-width:1999px)").matches)
    return 2;
};

const TeamSlider = () => {
  const [num, setNum] = useState(checkWidth());
  window.addEventListener("resize", () => {
    // when windows resizes, check for our current breakpoints
    const newNum = checkWidth();
    setNum(newNum);
  });

  const component = data.map((el, i) => (
    <SwiperSlide key={i} loop={true}>
      <Slide text={el.text} title={el.name} job={el.job} pic={el.pic} />
    </SwiperSlide>
  ));
  return (
    <div>
      <Swiper slidesPerView={num}>
        <TeamNavigation />
        {component}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
