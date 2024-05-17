import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Assets/css/timecarosel.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import First from "../Assets/videos/gif videos/First.mp4";
import Second from "../Assets/videos/gif videos/story.mp4";
import Second3 from "../Assets/videos/gif videos/story2.mp4";
import Second4 from "../Assets/videos/gif videos/story3.mp4";
export default function TimeCarosel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        id="sw"
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-[80%] h-full !p-[20px]"
      >
        <SwiperSlide id="ti">
          <div className="">
            <video autoPlay muted playsInline>
              <source src={First} />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide id="ti">
          <div className="">
            <video autoPlay muted playsInline>
              <source src={Second} />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide id="ti">
          <div className="">
            <video autoPlay muted playsInline>
              <source src={Second3} />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide id="ti">
          <div className="">
            <video autoPlay muted playsInline>
              <source src={Second4} />
            </video>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
