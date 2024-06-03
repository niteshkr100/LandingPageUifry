import React from 'react'
import {AiFillApple} from 'react-icons/ai'
const GetStarted = () => {
  return (
    <div className='container mx-auto mt-40 get'>
    <img src="/images/Star 8.png" alt="" className='star8'/>
    <img src="/images/Star 10.png" alt="" className='star10'/>
    <img src="/images/Star 7 white.png" alt="" className='star7white'/>
    <img src="/images/Star 6white.png" alt="" className='star6white'/>
    <img src="/images/ halfcircle.png" alt="" className='halfcircle1'/>
    <img src="/images/ halfcircle2.png" alt=""  className="halfcircle2"/>
    <img src="images/halfcolor.png" alt="" className='halfcolor'/>
    <img src="/images/Group 1000002356.png" alt="" className='startcolor'/>
   
        <div className="flex flex-col lg:flex-row justify-between items-center bg-black  py-5 lg:py-10">
            <div className="flex flex-col gap-4 pl-4 lg:pl-20">
            <p className='text-4xl font-bold text-white'>Ready To Get Started?</p>
                <p className='text-white'>Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br />
Vulputate.</p>
<button className='bg-white text-black btn w-48 border-none flex gap-2 items-center capitalize hover:bg-primary'>Download App
<AiFillApple className='text-xl'/>
</button>
            </div>
            <img src="/assets/getstarted.svg" alt="" className='getstarted'/>
         
        </div>
    </div>
  )
}

export default GetStarted