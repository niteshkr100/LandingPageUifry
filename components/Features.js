import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
const Features = () => {
  return (
    <div className="container mx-auto ml-20px">
      <div className="flex flex-col lg:flex-row justify-between items-center">
      <img src="/images/Star 2.png" alt="" className="star2"/>
      <img src="/assets/subhero.svg" alt="" className="subhero"/>
        <div className="flex flex-col gap-5 items-start feat">
       <p className="text-primary font-medium text-lg items-start">Features</p>
       <p className="text-4xl font-bold items-start">Uifry Premium</p>
       <div className="flex flex-col gap-2">
       <div className="flex items-center gap-3">
        <img src="/assets/budget.svg" alt="" className="budget"/>
       <p className="text-2xl font-semibold">Budgeting Intervals</p>
       </div>
       
        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
       </div>
       <div className="flex flex-col gap-2">
       <div className="flex items-center gap-3">
        <img src="/assets/b2.svg" alt="" />
       <p className="text-2xl font-semibold">Budgeting Intervals</p>
       </div>
       
        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
       </div>
       <div className="flex flex-col gap-2">
       <div className="flex items-center gap-3">
        <img src="/assets/b3.svg" alt="" />
       <p className="text-2xl font-semibold">Budgeting Intervals</p>
       </div>
       
        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
       </div>
    
        </div>
        <img src="/images/sidecolor.png" alt="" className="sidecolor"/>
      </div>
      
    </div>
  );
};

export default Features;
