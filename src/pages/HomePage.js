import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SecondSection from "../components/SecondSection";
import ThirdHeader from "../components/ThirdHeader";
import "../Assets/css/style.css";
import { useInView } from "react-intersection-observer";
import FourthSection from "../components/FourthSection";
export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(inView);
  // console.log(isScrolled);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };
  // useEffect(() => {
  //   return () => {
  //     window.addEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // console.log(scrollPosition);
  return (
    <div className="scrollable-container onload">
      <Header Scroll={scrollPosition} />
      <SecondSection Scroll={scrollPosition} />
      <ThirdHeader Scroll={scrollPosition} />
      <FourthSection Scroll={scrollPosition} />
    </div>
  );
}
