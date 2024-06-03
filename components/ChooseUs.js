import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
const ChooseUs = () => {
  return (
    <div className="container mx-auto mb-20 ml-20px">
      <div className="flex flex-col lg:flex-row justify-between items-center">
   
        <div className="flex flex-col gap-5 items-start">
       <p className="text-primary font-medium text-lg items-start">Advantage</p>
       <p className="text-4xl font-bold items-start">Why Choose Uifry?</p>
       <div className="flex flex-col gap-2">
       <div className="flex items-center gap-3">
        <img src="/assets/bell.svg" alt="" />
       <p className="text-2xl font-semibold">Clever Notifications</p>
       </div>
       
        <p>Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis <br />
Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis <br />
Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget <br />
Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
       </div>
    
      
        </div>
        <div className="phone3" >
         <img src="/images/phone3.png" alt=""  className="chose"/>
         <img src="/images/phone3color.png" alt="" className="phonecolor3"/>
        </div>
        

      </div>
    </div>
  );
};

export default ChooseUs;
