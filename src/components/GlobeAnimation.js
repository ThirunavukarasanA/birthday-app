import React, { useRef, useEffect, useState } from "react";
import DesktopMap from "../Assets/videos/final map.mp4";
import TabMap from "../Assets/videos/mobmap.mp4";
import Next from "../Assets/images/next.png";
export default function GlobeAnimation() {
  const videoRef = useRef(null);
  const [showDesktop, setShowDesktop] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const handleVideoEnded = () => {
    setShowDesktop(true);
    setShowArrow(true);
  };
  const handleDesktopVideoPlayButton = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowDesktop(false);
      setShowArrow(false);
    }
  };
  const mobileRef = useRef(null);
  const [showMobile, setShowMobile] = useState(false);
  const handleMobVideoEnded = () => {
    setShowMobile(true);
  };
  const handleMobilePlayButton = () => {
    if (mobileRef.current) {
      mobileRef.current.play();
      setShowMobile(false);
    }
  };
  useEffect(() => {
    const videoElement = videoRef.current;
    const mobvideoElement = mobileRef.current;
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setShowDesktop(false);
        setShowMobile(false);
        setShowArrow(false);
        if (entry.isIntersecting) {
          setShowDesktop(false);
          setShowMobile(false);
          videoElement.play().catch((error) => {
            console.error("Error attempting to play the video:", error);
          });
          mobvideoElement.play().catch((err) => {
            console.log("Error attempting to paly the mobile video", err);
          });
        } else {
          videoElement.pause();
          mobvideoElement.pause();
          setShowDesktop(true);
          setShowMobile(true);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    if ((videoElement, mobvideoElement)) {
      observer.observe(videoElement);
      observer.observe(mobvideoElement);
    }
    return () => {
      if ((videoElement, mobvideoElement)) {
        observer.unobserve(videoElement);
        observer.unobserve(mobvideoElement);
      }
    };
  }, []);
  return (
    <div id="globe">
      <div className="relative lg:block lge:block md:hidden mdsm:hidden sm:hidden">
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
          <source src={DesktopMap} />
        </video>
        {showDesktop && (
          <div className="absolute top-0 border w-full h-full vidbg">
            <div className="flex justify-center items-center h-full">
              <button
                onClick={() => {
                  handleDesktopVideoPlayButton();
                }}
                className="rounded-lg px-6 py-2 backcolor text-white text-h4 font-serif"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
        {showArrow && (
          <div className="absolute bottom-24 right-6 scale-in-hor-right">
            <a href="#scroll" className="">
              <img src={Next} alt="next button" className="" />
            </a>
          </div>
        )}
      </div>
      <div className="relative lg:hidden lge:hidden md:block mdsm:block sm:block">
        <video
          ref={mobileRef}
          onEnded={() => {
            handleMobVideoEnded();
          }}
          autoPlay
          muted
          playsInline
          className="w-full"
        >
          <source src={TabMap} />
        </video>
        {showMobile && (
          <div className="absolute top-0 border w-full h-full vidbg">
            <div className="flex justify-center items-center h-full">
              <button
                onClick={() => {
                  handleMobilePlayButton();
                }}
                className="rounded-lg px-6 py-2 backcolor text-white text-h4 font-serif"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
        {showArrow && (
          <div className="absolute bottom-24 right-6 scale-in-hor-right">
            <a href="#scroll" className="">
              <img src={Next} alt="next button" className="" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
