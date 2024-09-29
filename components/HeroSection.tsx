import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className=" px-20 bg-pundu mt-20">
      <div className="flex justify-between items-center gap-20 h-[100vh] ">
        <div className="text flex  flex-col gap-10">
          <h1 className="text-6xl font-semibold ">
            {" "}
            <span className="text-[#B1B1B1]"> UI/UX Design </span> & <br />{" "}
            Development Services.
          </h1>
          <p className="capitalize font-semibold text-[#A5A1A9]">
            graphic design, UI/UX design, poster design, logo design, mobile app{" "}
            <br /> design, mobile app development, web development,{" "}
          </p>

          <div className="flex gap-10">
            <button className="rounded-full rounded-bl-none bg-sky-500 py-2 px-6 text-white tracking-wide">
              Contact Us
            </button>
            <button className="rounded-full rounded-br-none bg-gray-700 py-2 px-6 text-white tracking-wide">
              Send Message{" "}
            </button>
          </div>
        </div>

        <div className="flex gap-5 items-center ">
          <div className="first h-[75vh]  rounded-full w-[170px] overflow-hidden  border border-yellow-400 moving-border relative">
           <div className="bg-image1"></div>
          </div>

          <div className="first  h-[90vh] overflow-hidden  rounded-full w-[170px] bg-red-400 border border-yellow-400 moving-border">
          <div className="bg-image1"></div>
          </div>
          <div className="first  h-[75vh] overflow-hidden  rounded-full w-[170px] bg-red-400 border border-yellow-400 moving-border">
          <div className="bg-image1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
