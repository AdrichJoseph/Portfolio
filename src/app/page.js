"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/AboutMe";


const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <div
        className="mt-0 pt-5 -mb-40"
        id="portfolio"
        style={{
          backgroundColor: "#000000",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <p
            className="text-[300px] text-[#161a1d] md:pl-[50px] px-5 max-w-[750px] w-[100%]"
            style={{ transform: "translate(0px,-20px)" }}
          >
            Portfolio
          </p>
          <div style={{ transform: "translate(0px,-290px)" }}>
            <p className="text-[#926c15] md:pl-[80px] px-5 font-extrabold text-5xl">
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 text-[16px] text-[#ffe169] leading-8 mt-5 ${hind.className}`}
            >
              Below, you'll find a collection of projects I've undertaken during
              my computer science journey, ranging from group school projects to
              personal projects. The diversity in project complexity reflects my
              ongoing evolution as a software developer. As a computer science
              student, I purposefully avoid confining myself in a box. Rather
              than focusing solely on one aspect, I prioritize learning
              fundamental skills. This approach allows me to adapt to the
              rapidly evolving technology in our field. As a result, you'll come
              across projects spanning database management, web development,
              mobile app development, and even network programming using
              sockets. I must highlight that my dedication to learning and
              continuous improvement remains unwavering.
            </p>
          </div>
        </div>
        <div
          style={{ transform: "translate(0px,-230px)" }}
        >
          <MySlider />
        </div>
      </div>
      <AboutMe />


      {isScrolled ? (
        <div
          onClick={() => window.scrollTo(0, 0)}
          className="bg-red-500 p-4 w-fit rounded-xl fixed bottom-8 right-8 cursor-pointer z-50 animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}


