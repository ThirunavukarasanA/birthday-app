import React, { useRef, useState } from "react";
import "../Assets/css/style.css";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import Head from "../Assets/videos/trutee lanscap.mov";
import TabHead from "../Assets/videos/trutee vertical mob1.mp4";
import MobHead from "../Assets/videos/trutee vertical mob1.mp4";
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
        <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden relative ">
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
            <>
              <div className="absolute top-0 w-full h-full vidbg">
                <div className="flex justify-center items-center h-full gap-x-5">
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
            </>
          )}
          <div className="absolute bottom-20 right-10">
            <button
              onClick={() => {
                toggleMute();
              }}
              className="p-3 rounded-full volume"
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
          <div className="absolute bottom-96 right-10 ">
            <button
              onClick={() => {
                TabtoggleMute();
              }}
              className="p-3 rounded-full volume"
            >
              {tabmute ? (
                <IoMdVolumeHigh className="text-h5 text-white" />
              ) : (
                <IoMdVolumeOff className="text-h5 text-white" />
              )}
            </button>
          </div>
        </div>

        <div className="lg:hidden lge:hidden md:hidden mdsm:hidden sm:block relative ">
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
          <div className="absolute bottom-24 right-10 ">
            <button
              onClick={() => {
                MobtoggleMute();
              }}
              className="p-3 rounded-full volume"
            >
              {mobmute ? (
                <IoMdVolumeOff className="text-h5 text-white" />
              ) : (
                <IoMdVolumeHigh className="text-h5 text-white" />
              )}
            </button>
          </div>
        </div>
        <GlobeAnimation />
      </div>
    </div>
  );
}
