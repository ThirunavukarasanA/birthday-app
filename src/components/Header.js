import React, { useRef, useState } from "react";
import "../Assets/css/style.css";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import Head from "../Assets/videos/trutee lanscap.mov";
import TabHead from "../Assets/videos/trutee vertical.mov";
import MobHead from "../Assets/videos/trutee vertical mob.mov";
import TimeCarosel from "./TimeCarosel";
import GlobeAnimation from "./GlobeAnimation";
export default function Header() {
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const handleVideoEnded = () => {
    setShowPlayButton(true);
  };
  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayButton(false);
    }
  };
  const tabref = useRef(null);
  const [tabPlayButton, setTabPlayButton] = useState(false);
  const handleTabVideoEnded = () => {
    setTabPlayButton(true);
  };
  const handleTabVideoButton = () => {
    if (tabref.current) {
      tabref.current.play();
      setTabPlayButton(false);
    }
  };
  const mobref = useRef(null);
  const [mobPlayButton, setMobPlayButton] = useState(false);
  const handleMobVideoEnd = () => {
    setMobPlayButton(true);
  };
  const handleMobPlayVideo = () => {
    if (mobref.current) {
      mobref.current.play();
      setMobPlayButton(false);
    }
  };
  const [muted, setMuted] = useState(true);
  const [mobmute, setMobmute] = useState(true);
  const [tabmute, setTabmute] = useState();
  const toggleMute = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.muted = !videoElement.muted;
      setMuted(!muted);
    }
  };
  const TabtoggleMute = () => {
    if (tabref.current) {
      const videoElement = tabref.current;
      videoElement.muted = !videoElement.muted;
      setTabmute(!tabmute);
    }
  };
  const MobtoggleMute = () => {
    if (mobref.current) {
      const videoElement = mobref.current;
      videoElement.muted = !videoElement.muted;
      setMobmute(!mobmute);
    }
  };
  return (
    <div>
      <div className="">
        <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden relative h-[100vh]">
          <video
            ref={videoRef}
            onEnded={() => {
              handleVideoEnded();
            }}
            autoPlay
            muted
            playsInline
            className="w-full"
          >
            <source src={Head} />
            Your browser does not support the video tag.
          </video>
          {showPlayButton && (
            <div className="absolute top-0 w-full h-full vidbg">
              <div className="flex justify-center items-center h-full">
                <button
                  onClick={() => {
                    handlePlayButtonClick();
                  }}
                  className="rounded-lg px-6 py-2 backcolor text-white text-h4 font-serif"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
          <div className="absolute top-24 right-10 ">
            <button
              onClick={() => {
                toggleMute();
              }}
              className="p-3 rounded-full bg-grey"
            >
              {muted ? (
                <IoMdVolumeOff className="text-h5 text-white" />
              ) : (
                <IoMdVolumeHigh className="text-h5 text-white" />
              )}
            </button>
          </div>
        </div>

        <div className="lg:hidden lge:hidden md:block mdsm:block sm:hidden relative md:-my-20">
          <video
            ref={tabref}
            onEnded={() => {
              handleTabVideoEnded();
            }}
            autoPlay
            muted
            playsInline
          >
            <source src={TabHead} />
          </video>
          {tabPlayButton && (
            <div className="absolute top-0 w-full h-full vidbg">
              <div className="flex justify-center items-center h-full">
                <button
                  onClick={() => {
                    handleTabVideoButton();
                  }}
                  className="rounded-lg px-6 py-2 backcolor text-white text-h4 font-serif"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
          <div className="absolute top-24 right-10 ">
            <button
              onClick={() => {
                TabtoggleMute();
              }}
              className="p-3 rounded-full bg-grey"
            >
              {tabmute ? (
                <IoMdVolumeHigh className="text-h5 text-white" />
              ) : (
                <IoMdVolumeOff className="text-h5 text-white" />
              )}
            </button>
          </div>
        </div>

        <div className="lg:hidden lge:hidden md:hidden mdsm:hidden sm:block relative h-[100vh]">
          <video
            ref={mobref}
            onEnded={() => {
              handleMobVideoEnd();
            }}
            autoPlay
            muted
            playsInline
            className="w-full"
          >
            <source src={MobHead} />
            Your browser does not support the video tag.
          </video>
          {mobPlayButton && (
            <div className="absolute top-0 w-full h-full vidbg">
              <div className="flex justify-center items-center h-full">
                <button
                  onClick={() => {
                    handleMobPlayVideo();
                  }}
                  className="rounded-lg px-6 py-2 backcolor text-white text-h4 font-serif"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
          <div className="absolute top-5 right-10 ">
            <button
              onClick={() => {
                MobtoggleMute();
              }}
              className="p-3 rounded-full bg-grey"
            >
              {mobmute ? (
                <IoMdVolumeOff className="text-h5 text-white" />
              ) : (
                <IoMdVolumeHigh className="text-h5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* <div className="backcolor lg:py-16 lge:py-16 md:py-16 mdsm:pt-16 sm:pt-16 text-h4">
          <div className="grid lg:grid-cols-3 lge:grid-cols-3 md:grid-cols-3 mdsm:grid-cols-1 sm:grid-cols-1">
            <div className="col-span-2 mdsm:pb-10 sm:pb-10">
              <div className="lg:mx-28 lge:mx-28 md:mx-28 mdsm:mx-10 sm:mx-0">
                <TimeCarosel />
              </div>
            </div>
            <div className="col-span-1 lg:block lge:block md:hidden mdsm:hidden sm:hidden">
              <div className="">
                <svg
                  width="25"
                  height="289"
                  viewBox="0 0 25 289"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:block lge:block md:block mdsm:hidden sm:hidden"
                >
                  <path
                    d="M24.495 276.431C24.495 283.163 19.644 288.575 12.351 288.575C5.05801 288.575 0.108012 283.031 0.108012 276.497C0.108012 269.468 4.62901 266.366 7.99501 265.607L9.54601 270.524C7.92901 270.887 5.19001 272.372 5.19001 276.497C5.19001 279.632 7.43401 283.163 12.351 283.163C16.74 283.163 19.281 279.929 19.281 276.431C19.281 272.372 16.575 270.755 14.892 270.293L16.311 265.31C19.545 266.069 24.495 269.171 24.495 276.431ZM12.285 242.75C17.169 242.75 19.347 239.252 19.347 235.985C19.347 232.751 17.169 229.253 12.285 229.253C7.40101 229.253 5.19001 232.751 5.19001 235.985C5.19001 239.252 7.40101 242.75 12.285 242.75ZM12.318 248.162C4.89301 248.162 0.10801 242.585 0.10801 235.985C0.10801 229.418 4.89301 223.841 12.318 223.841C19.71 223.841 24.495 229.418 24.495 235.985C24.495 242.585 19.71 248.162 12.318 248.162ZM24 184.392L24 189.903L8.62201 199.539L24 199.539L24 204.72L0.603008 204.72L0.603008 198.384L14.826 189.606L0.603008 189.606L0.603007 184.392L24 184.392ZM5.58601 146.364L5.58601 153.591L24 153.591L24 158.805L5.58601 158.805L5.58601 165.999L0.603007 165.999L0.603006 146.364L5.58601 146.364ZM24 113.136L24 127.986L0.603005 127.986L0.603004 113.169L5.52001 113.169L5.52001 122.772L9.97501 122.772L9.97501 114.06L14.562 114.06L14.562 122.772L19.05 122.772L19.05 113.136L24 113.136ZM24 73.303L24 78.814L8.622 88.45L24 88.45L24 93.631L0.603003 93.631L0.603003 87.295L14.826 78.517L0.603003 78.517L0.603003 73.303L24 73.303ZM5.586 35.2749L5.586 42.5019L24 42.5019L24 47.7159L5.586 47.7159L5.586 54.9099L0.603002 54.9099L0.603001 35.2749L5.586 35.2749ZM6.345 0.855118L7.665 5.54112C6.576 5.70612 4.728 6.59712 4.728 9.43512C4.728 11.3821 5.949 12.6361 7.236 12.6361C8.358 12.6361 9.183 11.9431 9.48 10.3261L10.074 7.19112C10.899 2.73612 13.77 0.426118 17.103 0.426118C20.766 0.426117 24.495 3.49512 24.495 9.07212C24.495 15.5401 20.304 18.3121 17.004 18.6421L15.849 13.8571C17.994 13.6591 19.875 12.2071 19.875 9.00612C19.875 6.96012 18.885 5.70612 17.433 5.70612C16.245 5.70612 15.387 6.66312 15.09 8.21412L14.496 11.4151C13.737 15.3751 11.097 17.7841 7.632 17.7841C3.21 17.7841 0.108 13.8901 0.108 9.40212C0.108 3.56112 3.606 1.35012 6.345 0.855118Z"
                    fill="#5FF550"
                  ></path>
                </svg>
                <svg
                  width="353"
                  height="30"
                  viewBox="0 0 353 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:hidden lge:hidden md:hidden mdsm:block sm:block px-5"
                >
                  <path
                    d="M15.121 29.585C7.16505 29.585 0.769047 23.852 0.769047 15.233C0.769047 6.614 7.32105 0.763999 15.043 0.763999C23.35 0.763999 27.016 6.107 27.913 10.085L22.102 11.918C21.673 10.007 19.918 6.77 15.043 6.77C11.338 6.77 7.16505 9.422 7.16505 15.233C7.16505 20.42 10.987 23.423 15.121 23.423C19.918 23.423 21.829 20.225 22.375 18.236L28.264 19.913C27.367 23.735 23.701 29.585 15.121 29.585ZM56.4863 15.155C56.4863 20.927 60.6203 23.501 64.4813 23.501C68.3033 23.501 72.4373 20.927 72.4373 15.155C72.4373 9.383 68.3033 6.77 64.4813 6.77C60.6203 6.77 56.4863 9.383 56.4863 15.155ZM50.0903 15.194C50.0903 6.419 56.6813 0.763999 64.4813 0.763999C72.2423 0.763999 78.8333 6.419 78.8333 15.194C78.8333 23.93 72.2423 29.585 64.4813 29.585C56.6813 29.585 50.0903 23.93 50.0903 15.194ZM127.015 29H120.502L109.114 10.826V29H102.991V1.349L110.479 1.349L120.853 18.158V1.349L127.015 1.349V29ZM173.517 7.238L164.976 7.238V29L158.814 29V7.238L150.312 7.238V1.349L173.517 1.349V7.238ZM214.347 29L196.797 29V1.349L214.308 1.349V7.16L202.959 7.16V12.425L213.255 12.425V17.846L202.959 17.846V23.15L214.347 23.15V29ZM262.982 29H256.469L245.081 10.826V29H238.958V1.349L246.446 1.349L256.82 18.158V1.349L262.982 1.349V29ZM309.484 7.238H300.943V29H294.781V7.238L286.279 7.238V1.349L309.484 1.349V7.238ZM351.722 8.135L346.184 9.695C345.989 8.408 344.936 6.224 341.582 6.224C339.281 6.224 337.799 7.667 337.799 9.188C337.799 10.514 338.618 11.489 340.529 11.84L344.234 12.542C349.499 13.517 352.229 16.91 352.229 20.849C352.229 25.178 348.602 29.585 342.011 29.585C334.367 29.585 331.091 24.632 330.701 20.732L336.356 19.367C336.59 21.902 338.306 24.125 342.089 24.125C344.507 24.125 345.989 22.955 345.989 21.239C345.989 19.835 344.858 18.821 343.025 18.47L339.242 17.768C334.562 16.871 331.715 13.751 331.715 9.656C331.715 4.43 336.317 0.763999 341.621 0.763999C348.524 0.763999 351.137 4.898 351.722 8.135Z"
                    fill="#5FF550"
                  ></path>
                </svg>
                <div className="lg:ml-6 lge:ml-6 md:ml-6 mdsm:ml-0 sm:ml-0 lg:-mt-[18.1rem]">
                  <div className="barback p-1 lg:text-right lge:text-left md:text-left mdsm:text-center sm:text-center px-8">
                    <p className="text-white text-h6 font-bold">
                      2023 Top List And Template
                    </p>
                  </div>
                  <div className="barback p-1 lg:text-right lge:text-left md:text-left mdsm:text-center sm:text-center px-8">
                    <p className="text-white text-h6 font-bold">
                      Your 2023 Warrpped Experience
                    </p>
                  </div>
                  <div className="barback p-1 lg:text-right lge:text-left md:text-left mdsm:text-center sm:text-center px-8">
                    <p className="text-white text-h6 font-bold">
                      Warrpped Mapped
                    </p>
                  </div>
                  <div className="barback p-1 lg:text-right lge:text-left md:text-left mdsm:text-center sm:text-center px-8">
                    <p className="text-white text-h6 font-bold">Me in 2023</p>
                  </div>
                  <div className="barback p-1 lg:text-right lge:text-left md:text-left mdsm:text-center sm:text-center px-8">
                    <p className="text-white text-h6 font-bold">
                      For the Record
                    </p>
                  </div>
                  <div className="barback p-1 lg:text-right lge:text-left md:text-left mdsm:text-center sm:text-center px-8">
                    <p className="text-white text-h6 font-bold">
                      Q&A: Top EQUAL Artist INNA
                    </p>
                  </div>
                  <div className="barback p-2 lg:text-right lge:text-left md:text-left mdsm:text-center sm:text-center px-8">
                    <p className="text-white text-h6 font-bold">
                      Q&A: Spotify's Global Head Of Marketing
                    </p>
                  </div>
                  <div className="barback p-1 lg:text-right lge:text-left md:text-left mdsm:text-center sm:text-center px-8">
                    <p className="text-white text-h6 font-bold">Media kit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <GlobeAnimation />
      </div>
    </div>
  );
}
