import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "../Assets/css/fourswiper.css";
// import required modules
import { EffectCreative } from "swiper/modules";
import FourtAnime from "../Assets/images/secondheader/fourtanime.png";
import RedWiggle from "../Assets/images/secondheader/RED_WIGGLE1 1.png";
import Globe from "../Assets/images/secondheader/GREEN_SHAPE2.png";
import Swipe from "../Assets/images/secondheader/swipe.png";
import SamplMp3 from "../Assets/audios/sample.mp3";
import SamplWave from "../Assets/audios/sample.wav";
import SamplOgg from "../Assets/audios/sample.ogg";
import { useEffect, useState } from "react";
// import ArrowRight from "../Assets/images/secondheader/ArrowRIght.png";
// import ArrowLeft from "../Assets/images/secondheader/ArrowLeft.png";
export default function FourthSection({ Scroll }) {
  // const [isPlaying, setIsPlaying] = useState(false);
  //   const togglePlay = () => {
  //     const audio = document.getElementById("myAudio");
  //     if (isPlaying) {
  //       audio.pause();
  //     } else {
  //       audio.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   };
  // const audioRef = useRef(null);
  const [addani, setAddani] = useState(false);
  useEffect(() => {
    if (Scroll > 2500) {
      setAddani(true);
    } else {
      setAddani(false);
    }
  }, [Scroll]);
  return (
    <div>
      <div className="bg-[#FF5B49]">
        <div className="relative">
          <div className="relative">
            <div className="absolute right-0 top-0">
              <img src={FourtAnime} alt="anime" />
            </div>
          </div>
          <div className="px-16 lg:pt-14 lge:pt-14 md:pt-14 mdsm:pt-16 sm:pt-16 pb-20">
            {addani ? (
              <>
                <p
                  className={`tracking-in-contract lg:text-left lge:text-left md:text-center mdsm:text-center sm:text-center lg:text-[50px] lge:text-[50px] md:text-[50px] mdsm:text-[40px] sm:text-[30px] font-semibold leading-tight font-serif relative  sm:bg-[#FF5B49]`}
                >
                  Wrapped Mapped <br />
                  Top Songs Streamed
                  <br />
                  Around the World
                </p>
              </>
            ) : (
              <>
                <p className="lg:text-left lge:text-left md:text-center mdsm:text-center sm:text-center lg:text-[50px] lge:text-[50px] md:text-[50px] mdsm:text-[40px] sm:text-[30px] font-semibold leading-tight font-serif relative  sm:bg-[#FF5B49]">
                  <br />
                </p>
              </>
            )}

            <div className="pt-20">
              {/* <div className="flex">
                <img src={ArrowRight} />
                <p>Swipe</p>
                <img src={ArrowLeft} />
              </div> */}
              <div className="flex justify-center pb-5">
                <img src={Swipe} alt="swipe" className="w-96" />
              </div>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[EffectCreative]}
                className="mySwiper w-[350px] h-[280px]"
              >
                <SwiperSlide id="fou" className="bg-white">
                  <div className="flex justify-center p-3 items-center h-full drop-shadow-lg bg-gradient-to-br from-[#F4FF47] via-[#D3F46A] to-[#FFAD40]">
                    <div className="w-full">
                      <div className="flex gap-5 pb-3">
                        <img
                          className="inline-block h-20 w-20 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <p className="text-h3 text-white ">Jhone Doe</p>
                          <p className="text-h6 text-">Editor</p>
                        </div>
                      </div>
                      <audio id="myAudio" controls className="p-3 bg-none mb-4">
                        <source src={SamplMp3} type="audio/mpeg" />
                        <source src={SamplOgg} type="audio/ogg" />
                        <source src={SamplWave} type="audio/wav" />
                        Your browser does not support the audio tag.
                      </audio>
                      {/* <button
                        onClick={togglePlay}
                        className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="fou" className="bg-white">
                  <div className="flex justify-center p-3 items-center h-full">
                    <div className="w-full">
                      <div className="flex gap-5 pb-3">
                        <img
                          className="inline-block h-20 w-20 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <p className="text-h3">Vicky </p>
                          <p className="text-h6">Editor</p>
                        </div>
                      </div>
                      <audio id="myAudio" controls className="p-3 bg-none mb-4">
                        <source src={SamplMp3} type="audio/mpeg" />
                        <source src={SamplOgg} type="audio/ogg" />
                        <source src={SamplWave} type="audio/wav" />
                        Your browser does not support the audio tag.
                      </audio>
                      {/* <button
                        onClick={togglePlay}
                        className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="fou" className="bg-white">
                  <div className="flex justify-center p-3 items-center h-full">
                    <div className="w-full">
                      <div className="flex gap-5 pb-3">
                        <img
                          className="inline-block h-20 w-20 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <p className="text-h3">Sam Andrason</p>
                          <p className="text-h6">Editor</p>
                        </div>
                      </div>
                      <audio id="myAudio" controls className="p-3 bg-none mb-4">
                        <source src={SamplMp3} type="audio/mpeg" />
                        <source src={SamplOgg} type="audio/ogg" />
                        <source src={SamplWave} type="audio/wav" />
                        Your browser does not support the audio tag.
                      </audio>
                      {/* <button
                        onClick={togglePlay}
                        className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="fou" className="bg-white">
                  <div className="flex justify-center p-3 items-center h-full">
                    <div className="w-full">
                      <div className="flex gap-5 pb-3">
                        <img
                          className="inline-block h-20 w-20 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <p className="text-h3">Allan</p>
                          <p className="text-h6">Editor</p>
                        </div>
                      </div>
                      <audio id="myAudio" controls className="p-3 bg-none mb-4">
                        <source src={SamplMp3} type="audio/mpeg" />
                        <source src={SamplOgg} type="audio/ogg" />
                        <source src={SamplWave} type="audio/wav" />
                        Your browser does not support the audio tag.
                      </audio>
                      {/* <button
                        onClick={togglePlay}
                        className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="fou" className="bg-white">
                  <div className="flex justify-center p-3 items-center h-full">
                    <div className="w-full">
                      <div className="flex gap-5 pb-3">
                        <img
                          className="inline-block h-20 w-20 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <p className="text-h3">Stark</p>
                          <p className="text-h6">Editor</p>
                        </div>
                      </div>
                      <audio id="myAudio" controls className="p-3 bg-none mb-4">
                        <source src={SamplMp3} type="audio/mpeg" />
                        <source src={SamplOgg} type="audio/ogg" />
                        <source src={SamplWave} type="audio/wav" />
                        Your browser does not support the audio tag.
                      </audio>
                      {/* <button
                        onClick={togglePlay}
                        className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="fou" className="bg-white">
                  <div className="flex justify-center p-3 items-center h-full">
                    <div className="w-full">
                      <div className="flex gap-5 pb-3">
                        <img
                          className="inline-block h-20 w-20 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>
                          <p className="text-h3">joy</p>
                          <p className="text-h6">Editor</p>
                        </div>
                      </div>
                      <audio id="myAudio" controls className="p-3 bg-none mb-4">
                        <source src={SamplMp3} type="audio/mpeg" />
                        <source src={SamplOgg} type="audio/ogg" />
                        <source src={SamplWave} type="audio/wav" />
                        Your browser does not support the audio tag.
                      </audio>
                      {/* <button
                        onClick={togglePlay}
                        className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      >
                        {isPlaying ? "Pause" : "Play"}
                      </button> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <img src={RedWiggle} alt="Red Wiggle" />
          </div>
          <div className="absolute bottom-5 right-5 ">
            <img src={Globe} alt="globe" className="vertical-shake" />
          </div>
        </div>
      </div>
    </div>
  );
}
