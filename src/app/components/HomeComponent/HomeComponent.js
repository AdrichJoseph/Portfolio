import React from "react";
import { Hind } from "next/font/google";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
  // settings for the carousel



  var settings = {
    infinite: true, //  Infinite loop sliding
    slidesToShow: 6, //  Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    speed: 2000, // Slide transition speed
    arrows: false, //   Whether to display the arrow
    autoplay: true, // Whether to automatically play
    autoplaySpeed: 2000, //  Auto play speed
    loop: true, // Whether to loop
    cssEase: "linear", // Transition effect
    responsive: [
      // Responsive settings for different screen sizes :
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      {" "}
      <div
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(to right, #880808 35%, #000000 65%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="bg-black flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-10 py-20 md:py-0 md:text-start text-center">
                  <p
                    className={`text-[#dbb42c] text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hello There
                  </p>
                  <h1 className="text-[#FFD700] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                    I'm Kipp
                  </h1>
                  <h2
                    className={`text-[#dbb42c] py-2 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                    Computer Science Student
                  </h2>
                  <a
                    href="/#portfolio"
                    className={`inline-block cursor-pointer bg-[#ffba08] transition-all duration-300 ease-in-out rounded-lg text-black py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xl lg:text-base md:mt-5 xl:mt-10 hover:bg-[#f48c06] hover:text-white hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    Projects
                  </a>
                  <a
                    href="KippJosephResume.pdf"
                    download="KippJosephResume.pdf"
                    className={`ml-10 cursor-pointer inline-block bg-[#ffba08] transition-all duration-300 ease-in-out rounded-lg text-black py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xl lg:text-base md:mt-5 xl:mt-10 hover:bg-[#f48c06] hover:text-white hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-[50px] md:bg-transparent md:pt-[130px] bg-black md:col-span-7 ">
              <div className="container m-auto">
                <img src="/Kipp.png" decoding="async" alt="Kipp"></img> 
              </div>
            </div>
          </div>
          <div className="container m-auto absolute">
            <div className="px-3">
              <div className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-[#d6d6d6] rounded-2xl z-20"
              style={{
                boxShadow: "#d90429 -10px 25px 50px 10px"
              }}
              >
                <div className="lg:py-10 md:py-6 sm:py-6 cursor-all-scroll">
                    <Slider {...settings}>
                    <img src='/Python.png' alt="python" className="h-12"/>
                    <img src='/flutter.png' alt="mongodb" className="h-12"/>
                    <img src='/reactjs.png' alt="reactjs" className="h-12"/>
                    <img src='/nextjs.png' alt="nextjs" className="h-12"/>
                    <img src='/sql.png' alt="sql" className="h-12"/>
                    <img src='/nodejs.png' alt="nodejs" className="h-12"/>
                    <img src='/Kotlin.png' alt="Kotlin" className="h-12"/>
                    </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
