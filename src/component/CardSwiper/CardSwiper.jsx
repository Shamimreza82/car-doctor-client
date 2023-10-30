import React from "react";
import Swiper from "swiper";

const CardSwiper = () => {

    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
      });

  return (
    <div className="swiper">
      <div className="swiper-wrapper" >
        <div className="swiper-slide" data-swiper-autoplay="2000">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>

      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default CardSwiper;
