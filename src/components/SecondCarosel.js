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
import Group from "../Assets/images/wave/Group 10.png";
import Group2 from "../Assets/images/wave/Group 11.png";
import Group3 from "../Assets/images/wave/Group 12.png";
import Group4 from "../Assets/images/wave/Group 13.png";
import Group5 from "../Assets/images/wave/Group 14.png";
import Group6 from "../Assets/images/wave/Group 15.png";
import Group7 from "../Assets/images/wave/Group 16.png";
import Group8 from "../Assets/images/wave/Group 17.png";
export default function SecondCarosel() {
  const waveImag = [
    {
      id: 0,
      img: Group,
      alt: "img 1",
    },
    {
      id: 1,
      img: Group2,
      alt: "img 2",
    },
    {
      id: 2,
      img: Group3,
      alt: "img 3",
    },
    {
      id: 3,
      img: Group4,
      alt: "img 4",
    },
    {
      id: 4,
      img: Group5,
      alt: "img 5",
    },
    {
      id: 5,
      img: Group6,
      alt: "img 6",
    },
    {
      id: 6,
      img: Group7,
      alt: "img 7",
    },
    {
      id: 7,
      img: Group8,
      alt: "img 8",
    },
  ];
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
        {waveImag.map((m) => (
          <>
            <SwiperSlide id="sec" key={m.id}>
              <img src={m.img} alt={m.alt} />
            </SwiperSlide>
          </>
        ))}
        {/* <SwiperSlide id="sec">
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
