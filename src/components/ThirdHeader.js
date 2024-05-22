import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
// import { createRoot } from "react-dom/client";
// import { useWavesurfer } from "wavesurfer-react";
// import Timeline from "wavesurfer.js/dist/plugins/timeline.esm.js";
import WaveSurfer from "wavesurfer.js";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlus } from "react-icons/fa6";
import { IoMdCall, IoIosMic } from "react-icons/io";
import { FaPlayCircle, FaPause } from "react-icons/fa";
import { BsEmojiGrin } from "react-icons/bs";
import Audio1 from "../Assets/audios/sample.mp3";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../Assets/css/swiper.css";
// import required modules
import "../Assets/css/style.css";
import { EffectCards } from "swiper/modules";
import Ring from "../Assets/images/secondheader/ring.png";
import Star from "../Assets/images/secondheader/star.png";
import Ring2 from "../Assets/images/secondheader/ring2.png";
import Mix from "../Assets/images/secondheader/mix2.png";
import AudioPlayer from "./AudioPlayer";
export default function ThirdHeader({ Scroll }) {
  const [addani, setAddani] = useState(false);
  useEffect(() => {
    if (Scroll > 2500) {
      setAddani(true);
    } else {
      setAddani(false);
    }
  }, [Scroll]);
  const whastApp = [
    {
      id: 0,
      img: "",
      name: "",
      message: "",
      audiofile: "",
    },
  ];
  return (
    <div>
      <div className="bg-[#16D0A6] ">
        <div className="relative">
          <div className="absolute">
            <img src={Ring} alt="RIng" className="w-32" />
          </div>
          <div className="absolute top-4 left-24">
            <img src={Star} alt="RIng" className="w-96 spinn" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
          <div>
            <div className="lg:pt-[17rem] lge:pt-[17rem] md:pt-[7rem] mdsm:pt-[5rem] sm:pt-[5rem] lg:pl-[27rem] lge:pl-[27rem] md:pl-[0rem] mdsm:pl-[0rem] sm:pl-[0rem] md:pb-16 mdsm:pb-16 sm:pb-16 sm:overflow-hidden relative z-50">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper w-[290px] h-[400px]"
              >
                <SwiperSlide className="rounded-[18px] bg-white">
                  <div className="p-2 bg-green grid grid-cols-3">
                    <div className=" col-span-2 flex justify-evenly items-center">
                      <FaArrowLeft className="text-white text-[22px]" />
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p className="text-white">Thirunavukarasan</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <IoIosVideocam className="text-white text-[22px]" />
                      <IoMdCall className="text-white text-[22px]" />
                      <div>
                        <ul>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#cfcecea1]">
                    <div className="whatsAppBg h-[18.5rem] pb-2">
                      <div className="pt-10">
                        <div className="bg-white w-fit p-2 rounded-e-md rounded-b-md mx-3">
                          <div className="flex items-center gap-x-3">
                            <p>🥳 Happy Birthday 🎂</p>
                            <p className="text-tiny text-grey">3.00 pm</p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-10">
                        <div className="bg-white w-fit p-2 rounded-e-md rounded-b-md mx-3">
                          <AudioPlayer src={Audio1} />
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 bg-[#e9edef]">
                    <div className="col-span-1">
                      <div className="flex justify-center items-center h-full">
                        <FaPlus className="text-[#777879] text-h5" />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="p-2 flex relative">
                        <BsEmojiGrin className="mt-2 absolute mx-2" />
                        <input
                          placeholder="Type Message here"
                          className="w-[100%] py-1 px-8 rounded-md placeholder:text-tiny"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex justify-center items-center h-full">
                        <IoIosMic className="text-[#777879] text-h5" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-[18px] bg-white">
                  <div className="p-2 bg-green grid grid-cols-3">
                    <div className=" col-span-2 flex justify-evenly items-center">
                      <FaArrowLeft className="text-white text-[22px]" />
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p className="text-white">Thirunavukarasan</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <IoIosVideocam className="text-white text-[22px]" />
                      <IoMdCall className="text-white text-[22px]" />
                      <div>
                        <ul>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-[18px] bg-white">
                  <div className="p-2 bg-green grid grid-cols-3">
                    <div className=" col-span-2 flex justify-evenly items-center">
                      <FaArrowLeft className="text-white text-[22px]" />
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p className="text-white">Thirunavukarasan</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <IoIosVideocam className="text-white text-[22px]" />
                      <IoMdCall className="text-white text-[22px]" />
                      <div>
                        <ul>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-[18px] bg-white">
                  <div className="p-2 bg-green grid grid-cols-3">
                    <div className=" col-span-2 flex justify-evenly items-center">
                      <FaArrowLeft className="text-white text-[22px]" />
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p className="text-white">Thirunavukarasan</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <IoIosVideocam className="text-white text-[22px]" />
                      <IoMdCall className="text-white text-[22px]" />
                      <div>
                        <ul>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-[18px] bg-white">
                  <div className="p-2 bg-green grid grid-cols-3">
                    <div className=" col-span-2 flex justify-evenly items-center">
                      <FaArrowLeft className="text-white text-[22px]" />
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p className="text-white">Thirunavukarasan</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <IoIosVideocam className="text-white text-[22px]" />
                      <IoMdCall className="text-white text-[22px]" />
                      <div>
                        <ul>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-[18px] bg-white">
                  <div className="p-2 bg-green grid grid-cols-3">
                    <div className=" col-span-2 flex justify-evenly items-center">
                      <FaArrowLeft className="text-white text-[22px]" />
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p className="text-white">Thirunavukarasan</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <IoIosVideocam className="text-white text-[22px]" />
                      <IoMdCall className="text-white text-[22px]" />
                      <div>
                        <ul>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-[18px] bg-white">
                  <div className="p-2 bg-green grid grid-cols-3">
                    <div className=" col-span-2 flex justify-evenly items-center">
                      <FaArrowLeft className="text-white text-[22px]" />
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p className="text-white">Thirunavukarasan</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <IoIosVideocam className="text-white text-[22px]" />
                      <IoMdCall className="text-white text-[22px]" />
                      <div>
                        <ul>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-[18px] bg-white">
                  <div className="p-2 bg-green grid grid-cols-3">
                    <div className=" col-span-2 flex justify-evenly items-center">
                      <FaArrowLeft className="text-white text-[22px]" />
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <p className="text-white">Thirunavukarasan</p>
                    </div>
                    <div className="flex justify-evenly items-center">
                      <IoIosVideocam className="text-white text-[22px]" />
                      <IoMdCall className="text-white text-[22px]" />
                      <div>
                        <ul>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full mb-[4px]"></li>
                          <li className="w-1 h-1 bg-white rounded-full"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-span-2 lg:order-1 lge:order-1 md:order-first mdsm:order-first sm:order-first relative">
            <div className="px-16 lg:pt-14 lge:pt-14 md:pt-14 mdsm:pt-16 sm:pt-16">
              {addani ? (
                <p className="sm:bg-[#16D0A6] md:bg-[#16D0A6] mdsm:bg-[#16D0A6] tracking-in-contract lg:text-right lge:text-right md:text-center mdsm:text-center sm:text-center lg:text-[50px] lge:text-[50px] md:text-[50px] mdsm:text-[40px] sm:text-[30px] font-semibold leading-tight font-serif">
                  {/* The Top Songs, Artist, <br />
                  Podacasts, and Listening <br /> Trends of 2023 Revealed */}
                  Memories
                  <br /> (Audio + Text Messages)
                </p>
              ) : (
                <p className="sm:bg-[#16D0A6] lg:text-right lge:text-right md:text-center mdsm:text-center sm:text-center lg:text-[50px] lge:text-[50px] md:text-[50px] mdsm:text-[40px] sm:text-[30px] font-semibold leading-tight font-serif">
                  <br />
                </p>
              )}
            </div>
            <div className="lg:pb-[20rem] lg:px-32 lge:px-32 md:px-32 mdsm:px-0 sm:px-0 sm:text-center lg:text-right lge:text-right md:text-right mdsm:text-center relative z-10">
              {/* <button className="border-2 font-semibold py-3 bg-[#16D0A6] px-10 rounded-full">
                Read More
              </button> */}
              <div className="relative"></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute bottom-0">
            <img src={Ring2} alt="RIng" className="w-52" />
          </div>
          <div className="absolute right-0 bottom-0 ">
            <img src={Mix} alt="Mix" className="w-[30rem] vertical-shake" />
          </div>
        </div>
      </div>
    </div>
  );
}
