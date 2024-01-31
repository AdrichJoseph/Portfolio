import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hind } from "next/font/google";
import Image from "next/image";

// Create a variable 'hind' using the 'Hind' font from 'next/font/google'.
const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Index({ id, data, DataArray }) {
  const router = useRouter();

  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  useEffect(() => {
    // Calculate the 'next' and 'prev' project indices based on 'id' and 'DataArray' length.
    if (JSON.parse(id) === DataArray.length - 1) {
      setNext(0);
    } else {
      setNext(JSON.parse(id) + 1);
    }
    if (JSON.parse(id) === 0) {
      setPrev(DataArray.length - 1);
    } else {
      setPrev(JSON.parse(id) - 1);
    }
  }, [DataArray.length, id]);

  return (
    <React.Fragment>
      {/* Overlay with a gradient background */}
      <div
        className="overlay h-[400px] lg:top-[96px] sm:top-0 z-20 border-t border-black-300"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      ></div>
      <div className="relative">
        {/* Display the main project image */}
        <Image
          src={data?.images[0]}
          alt="bg photo"
          className="h-[400px]  lg:mt-24 sm:mt-0  object-fill"
          width={0}
          height={20}
          sizes="100vw"
          style={{ width: '100%', backgroundSize: "cover" }}
        />
      </div>

      {/* Project information */}
      <div className="absolute z-30 top-[42px] sm:top-[200px] sm:left-[65px] justify-center  items-center w-full px-10 sm:w-3/4 xl:w-1/2 sm:px-0  sm:text-left">
        <div className="container m-auto">
          <div className="max-w-[650px] w-[100%] m-auto">
            <p className="opacity-3 sm:text-left text-center font-sans text-[#FFD700] mb-3">
              Kipp's Project
            </p>
            <h1 className="opacity-3 text-[#FFD700] sm:text-left text-center w-full sm:w-3/4 font-recoletaBold text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
              {data?.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Grid layout for displaying project images */}
      <div
        className="grid grid-cols-12 relative space-x-0  lg:space-x-20"
        style={{
          background: "linear-gradient(90deg, #880808 25%, black 50%)",
        }}
      >
        <div className="col-span-12 lg:col-span-8 mb-20 scrol lg:px-0 sm:px-20">
          {data?.images.map((item, index) => (
            <div
              key={index}
              className="flex justify-center lg:justify-end items-center"
            >
              <img
                src={item}
                alt={`Project Image ${index}`}
                height="auto"
                width={800}
                className="mt-20 rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-4 lg:px-0 sm:px-0">
          {/* Project details and skills */}
          <div className="mt-10 sm:mt-24 w-full lg:max-w-[300px] lg:px-1 px-3 sticky top-36 pb-14">
            <h1 className="text-3xl mb-4 text-[#805b10]">{data?.name}</h1>
            <p className="text-[14px] font-sans mb-4 text-[#FFD700]">
              {data?.des}
            </p>
            <p
              id="highlight"
              className="my-2 text-dark text-[20px] font-sans text-[#805b10]"
            >
              Project Description
            </p>
            <p className="text-[14px] font-sans mb-4 text-[#FFD700]">
              {data?.des1}
            </p>

            {/* Display project skills */}
            <div className="flex flex-wrap">
              <h1 className="mr-5 text-[14px] bg-[#805b10] lg:bg-[#880808] px-2 py-1 rounded-xl font-sans mb-4 text-[#ffffff] lg:text-[#FFD700]">
                UI/UX Design
              </h1>
              <h1 className="mr-5 text-[14px] bg-[#805b10] lg:bg-[#880808] px-2 py-1 rounded-xl font-sans mb-4 text-[#ffffff] lg:text-[#FFD700]">
                Python
              </h1>
              <h1 className="mr-5 text-[14px] bg-[#805b10] lg:bg-[#880808] px-2 py-1 rounded-xl font-sans mb-4 text-[#ffffff] lg:text-[#FFD700]">
                Flutter
              </h1>
              <h1 className="mr-5 text-[14px] bg-[#805b10] lg:bg-[#880808] px-2 py-1 rounded-xl font-sans mb-4 text-[#ffffff] lg:text-[#FFD700]">
                Kotlin
              </h1>
              <h1 className="mr-5 text-[14px] bg-[#805b10] lg:bg-[#880808] px-2 py-1 rounded-xl font-sans mb-4 text-[#ffffff] lg:text-[#FFD700]">
                Database Management
              </h1>
              <h1 className="mr-5 text-[14px] bg-[#805b10] lg:bg-[#880808] px-2 py-1 rounded-xl font-sans mb-4 text-[#ffffff] lg:text-[#FFD700]">
                Backend Development
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation for previous and next projects */}
      <div className="relative flex bg-accent-color h-48  text-white">
        {/* Previous project */}
        <div
          className={`group w-1/2 flex items-center justify-center bg-cover  ${hind.className}`}
          style={{ backgroundImage: `url(${DataArray[prev]?.images[0]})` }}
        >
          <a
            className="flex justify-center group:hover:bg-[#223740] cursor-pointer transition-colors duration-300 bg-[#880808]  bg-opacity-90 items-center w-full h-full"
            onClick={() => router.push(`/portfoliodetail/${prev}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="transform transition-transform group-hover:-translate-x-3 duration-300 w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
          </a>
        </div>

        {/* Next project */}
        <div
          className={`group w-1/2 flex items-center justify-center bg-cover  ${hind.className}`}
          style={{ backgroundImage: `url(${DataArray[next]?.images[0]})` }}
        >
          <a
            className="flex justify-center group:hover:bg-[#223740] cursor-pointer transition-colors duration-300 bg-[#880808]  bg-opacity-90 items-center w-full h-full"
            onClick={() => router.push(`/portfoliodetail/${next}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="transform transition-transform group-hover:translate-x-3 duration-300 w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
