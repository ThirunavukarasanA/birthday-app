import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../Assets/css/secondcarosel.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Group from "../Assets/images/wave/Group 2.png";
import Group2 from "../Assets/images/wave/Group 3.png";
import Group3 from "../Assets/images/wave/Group 4.png";
import Group4 from "../Assets/images/wave/Group 5.png";
import Group5 from "../Assets/images/wave/Group 6.png";
import Group6 from "../Assets/images/wave/Group 7.png";
import Group7 from "../Assets/images/wave/Group 8.png";
export default function SecondCarosel() {
  return (
    <div>
      <Swiper
        id="se"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide id="sec">
          <img src={Group} alt="carosels" />
        </SwiperSlide>
        <SwiperSlide id="sec">
          <img src={Group2} alt="carosels" />
        </SwiperSlide>
        <SwiperSlide id="sec">
          <img src={Group3} alt="carosels" />
        </SwiperSlide>
        <SwiperSlide id="sec">
          <img src={Group4} alt="carosels" />
        </SwiperSlide>
        <SwiperSlide id="sec">
          <img src={Group5} alt="carosels" />
        </SwiperSlide>
        <SwiperSlide id="sec">
          <img src={Group6} alt="carosels" />
        </SwiperSlide>
        <SwiperSlide id="sec">
          <img src={Group7} alt="carosels" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
