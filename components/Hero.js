import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import Image from "./Image";
const Hero = () => {
  return (
    <div className="container mx-auto ml-20px heros">
    <img src="images/Star0.png" alt="" className="star0"/>
    <img src="/images/Star 3.png" alt="" className="star3" />
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-5">
        <div className="textpluscolor">
           <img src="/images/Group 35930.png" alt="" className="colortext"/>
          <p className="herotext text-6xl font-bold mt-10 ">Make The Best Financial Decisions</p>
          </div>
          <p>
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquot
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Port-titor.
          </p>
          <div className="flex items-center gap-5">
            <button className="btn btn-active rounded-none flex items-center gap-3 hover:bg-primary border-none">
              Get Started <BsArrowRight className="text-xl" />
            </button>
            <div className="flex gap-3 cursor-pointer items-center">
              <MdSlowMotionVideo className="text-3xl" />
              <p className="text-xl font-medium">Watch</p>
            </div>
          </div>
          <img className="h-[350px] ss" src="/assets/downhero.svg" alt="" />
        </div>
         <img src="/images/frame1.png" alt="" className="frame1"/>
   
      </div>
    </div>
  );
};

export default Hero;
