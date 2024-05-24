import React, { useEffect, useState } from "react";
import RvsStaff from "../Assets/videos/rvs staff.mp4";
import Thumbnail from "../Assets/images/thumbnail.png";
import Thumbnail2 from "../Assets/images/thumbnail2.png";
import Thumb from "../Assets/images/1.png";
import Thumb2 from "../Assets/images/2.png";
export default function VideoSection({ Scroll }) {
  console.log("Scroll", Scroll);
  const [addani, setAddani] = useState(false);
  useEffect(() => {
    if (Scroll > 1700) {
      setAddani(true);
    } else {
      setAddani(false);
    }
  }, [Scroll]);
  return (
    <div>
      <div className="videobg py-10">
        <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden">
          {addani ? (
            <div className="px-48 pt-10 pb-10">
              <p
                className={`tracking-in-contract text-[#DAB503] bg-black relative z-10 lg:text-[64px] lge:text-[64px] md:text-[54px] mdsm:text-[44px] sm:text-[24px] font-semibold leading-none font-serif `}
              >
                Aging Like a Fine Wine
              </p>
            </div>
          ) : (
            <p
              className={`relative z-10  px-20 pt-20 lg:text-[64px] lge:text-[64px] md:text-[54px] mdsm:text-[44px] sm:text-[24px] font-semibold leading-none font-serif `}
            >
              {" "}
              <br />
            </p>
          )}
        </div>
        <div className="lg:hidden lge:hidden md:block mdsm:hidden sm:hidden">
          {addani && (
            <div className="px-48 pt-10 pb-10">
              <p
                className={`tracking-in-contract text-[#DAB503] bg-black relative z-10 lg:text-[64px] lge:text-[64px] md:text-[54px] mdsm:text-[44px] sm:text-[24px] font-semibold leading-none font-serif `}
              >
                Aging Like a Fine Wine
              </p>
            </div>
          )}
        </div>
        <div className="lg:hidden lge:hidden md:hidden mdsm:block sm:block px-20 sm:px-10 pt-20">
          {addani && (
            <div className="pt-0 pb-20">
              <p
                className={`tracking-in-contract text-[#DAB503] bg-black relative z-10 text-center lg:text-[64px] lge:text-[64px] md:text-[54px] mdsm:text-[44px] sm:text-[36px] font-semibold leading-none font-serif `}
              >
                Aging Like a Fine Wine
              </p>
            </div>
          )}
        </div>
        <div className="lg:flex lge:flex md:flex mdsm:block sm:block lg:justify-around lge:justify-around md:justify-around mdsm:px-24 sm:px-24 md:gap-5">
          <video
            controls
            poster={Thumb2}
            width="350"
            className="lg:pb-0 lge:pb-0 md:pb-0 sm:pb-10 mdsm:pb-10"
          >
            <source src={RvsStaff} />
          </video>
          <video controls poster={Thumb} width="350">
            <source src={RvsStaff} />
          </video>
        </div>
      </div>
    </div>
  );
}
