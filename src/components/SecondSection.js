import React, { useEffect, useState } from "react";
import Red from "../Assets/images/secondheader/Red-Pixel.png";
import Flower from "../Assets/images/secondheader/Floral.png";
import GreenPanel from "../Assets/images/secondheader/LAVENDER_GRADIENT.png";
import MobGreenPanel from "../Assets/images/secondheader/MOBLAVENDER_GRADIENT.png";
import Wire from "../Assets/images/secondheader/SILVER_WIGGLE 1.png";
import Wire2 from "../Assets/images/secondheader/SILVER_WIGGLE2 1.png";
import "../Assets/css/style.css";
import SecondCarosel from "./SecondCarosel";
export default function SecondSection({ Scroll }) {
  const [addani, setAddani] = useState(false);
  useEffect(() => {
    if (Scroll > 1000) {
      setAddani(true);
    } else {
      setAddani(false);
    }
  }, [Scroll]);
  return (
    <div id="scroll" className="bg-[#DAB503]">
      <div className="relative">
        <div className="lg:block lge:block md:hidden mdsm:hidden sm:hidden">
          {addani ? (
            <div className="px-40 pt-20">
              <p
                className={`tracking-in-contract relative z-10 lg:text-[64px] lge:text-[64px] md:text-[54px] mdsm:text-[44px] sm:text-[24px] font-semibold leading-none font-serif `}
              >
                Here's What's In <br />
                Store for Your <br /> 2023 Warpped
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
            <div className="px-40 pt-20">
              <p
                className={`tracking-in-contract relative z-10 md:bg-[#DAB503] lg:text-[64px] lge:text-[64px] md:text-[54px] mdsm:text-[44px] sm:text-[24px] font-semibold leading-none font-serif `}
              >
                Here's What's In <br />
                Store for Your <br /> 2023 Warpped
              </p>
            </div>
          )}
        </div>
        <div className="lg:hidden lge:hidden md:hidden mdsm:block sm:block px-20 sm:px-10 pt-20">
          {addani && (
            <p className="tracking-in-contract relative z-10 bg-[#DAB503] text-center lg:text-[64px] lge:text-[64px] md:text-[54px] mdsm:text-[44px] sm:text-[36px] font-semibold leading-none font-serif">
              Here's What's In <br />
              Store for Your <br /> 2023 Warpped
            </p>
          )}
        </div>
        <div className="pt-24 pb-[5rem] sm:pb-28 lg:px-32 lge:px-32 md:px-32 mdsm:px-0 sm:px-0 sm:text-center relative z-10">
          {/* <button className="border-2 uppercase font-semibold py-3 bg-[#DAB503] px-10 rounded-full">
            Read More
          </button> */}
          <SecondCarosel />
          <div className="relative"></div>
        </div>
        <div className="">
          <div className="absolute top-[16rem] left-[32rem]">
            <img src={Red} alt="red" />
          </div>
          <div className="absolute right-0 bottom-0 lg:block lge:block md:block mdsm:hidden sm:hidden">
            <img src={GreenPanel} alt="green panel" className="" />
          </div>
          <div className="absolute right-0 bottom-0 lg:hidden lge:hidden md:hidden mdsm:block sm:block">
            <img src={MobGreenPanel} alt="green panel" className="" />
          </div>
          <div className="absolute top-[11.25rem] right-[13.25rem]">
            <img src={Flower} alt="Flower" className="spinn" />
          </div>
          <div className="absolute top-0 right-0">
            <img src={Wire} alt="Wire" />
          </div>
          <div className="absolute bottom-0">
            <img src={Wire2} alt="wire2" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
