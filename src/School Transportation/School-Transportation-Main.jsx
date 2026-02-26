import React from 'react'
import { motion, useScroll, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';
import './School-Transportation.css'

export const SchoolTransportationMain = () => {
      const { scrollY } = useScroll();    
    const yRange = useTransform(scrollY, [0, 1500], [0, 350]);
      const smoothY = useSpring(yRange, { stiffness: 80, damping: 25, restDelta: 0.001 });
  return (
    <div>
      {/* Section1-hero */}
      <section className="hero-main bg-[url('/school_bus_2.webp')] bg-cover bg-center bg-no-repeat  flex items-center justify-center relative transportation-overlay  ">
        <div className='max-w-[1320px] py-10 px-5 md:px-10 md:py-48 w-full flex justify-center relative z-10'>
          <h2 className='md:text-[70px] text-white font-bold text-center'>School <br /> Transportation</h2>
        </div>
      </section>

      {/* Section -2 */}
        <section className='bg-white w-full flex justify-center items-center'>
                <div className='flex flex-col py-10 md:py-25 md:flex-row max-w-[1320px] w-full justify-between items-start gap-10 px-6 relative'>
                      
                  <div className='w-full md:w-1/2 p-5 md:sticky top-0'>
                    <img src="Arab-Falcon-Bus-rental-dubai.png" alt="Arab Falcon Bus Rental Dubai" className='w-full h-auto' />
                  </div>
                  <div className='w-full md:w-1/2 py-5 md:pl-28 z-1 relative'>
                    <div className="cms-movings absolute top-0 -z-1 hidden md:block md:left-15">
                      <motion.div
                        className="cms-moving cms-moving-1"
                        style={{
                          y: smoothY,
                          scale: 1,
                          rotateX: 0,
                          rotateY: 0,
                          rotateZ: 0,
                        }}
                      />
                    </div>
                    <p className='text-base1 text-[#2e3192]'>Services</p>
                    <h2 className='mt-2'>
                      School Transportation
                    </h2>
                    <p className='mt-4 text-body'>
                     Arab Falcon Bus Rental LLC is a leading school transport provider for numerous schools in Dubai, UAE.
                     <br />
                     <br />
                     

                        Our core value is to provide school transportation with the highest level of safety, security, and reliability. We offer dedicated Customer Care Representatives for individual parents, ensuring personalized support.
                     <br />
                     <br />


                        For enhanced safety and security, GPS tracking and CCTV cameras are installed in all Arab Falcon Bus Rental LLC buses.
                     <br />
                     <br />

                        We place special emphasis on driver training—all our drivers undergo regular training sessions conducted by the Road and Transport Authority (RTA) Dubai and Arab Falcon Bus Rental LLC to maintain the highest standards of safety and professionalism.
                    </p>
        
                    <div className='flex max-sm:flex-col gap-5 mt-8'>
                      <button className='w-[180px] py-2 bg-gold hover:bg-primary text-white font-semibold h-16'>
                        Explore More
                      </button>
                      <button className='button1 w-[180px] py-2'>
                        Contact Us
                      </button>
                    </div>
        
                  </div>
                </div>
              </section>

         {/* SECTION -3 */}
      <section className='bg-[#2e3192] py-10 px-5 md:py-20 px-10 flex w-full justify-center items-center'>
        <div className='max-w-[1320px] flex flex-col md:gap-20  gap-10 justify-between h-auto px-6 items-start'>
            <div>
                <p className='text-white'>Safety Standards</p>
                <h2 className='text-white'>At Arab Falcon Bus Rental LLC, safety
                    <br />
                     comes first, ensuring secure and
                     <br />
                      reliable hotel transportation.</h2>
            </div>
            <div className='flex gap-x-2 gap-y-6 '>
                                   {[
            { img: "svgviewer-png-output (8) (1).png", title: "Reliable and Punctual Service", desc: "Ensuring on-time transportation every time." },
            { img: "svgviewer-png-output (9) (2).png", title: "Well-Maintained & Modern Fleet", desc: "Clean, comfortable, and fully-equipped vehicles." },
            { img: "svgviewer-png-output (10) (1).png", title: "Trained & Professional Drivers", desc: "Highly skilled, licensed, and customer-friendly staff." },
            { img: "svgviewer-png-output (11) (1).png", title: "Technology-Driven Services", desc: "Real-time tracking and automated scheduling." }
          ].map((item, index) => (
            <div key={index} className='col w-full sm:w-[45%] lg:w-[23%] px-2 group '>
              <img src={item.img} alt="icon" className="w-12 h-12 object-contain group-hover:animate-bounce-once" />
              <p className='text-white text-lg font-semibold mt-4'>{item.title}</p>
              <p className='text-white/80 text-base mt-2'>{item.desc}</p>
            </div>
          ))}
            </div>
   
        </div>
      </section>
       {/* SECTION -4 */}
       <section className='bg-white flex flex-col md:flex-row w-full'>
          <div className="w-full py-10 md:py-20 px-5 md:pl-80 md:pr-5 md:w-1/2">
            <h2 className="text-[#444d6c]">Why Choose Us</h2>
            <div className='md:pt-10'>                
                    {[
                        { img: "svgviewer-png-output (12) (1).png", title: "Safe & Secure School Transportation" },
                        { img: "svgviewer-png-output (13) (1).png", title: "Experienced Drivers" },
                        { img: "svgviewer-png-output (14) (1).png", title: "GPS Tracking & CCTV" },
                        { img: "svgviewer-png-output (15) (1).png", title: "Dedicated Customer Support" }
                    ].map((item,index)=>{

                    return(
                           <div key={index} className='flex'>
                    <img src={item.img} alt="icon" />
                    <p className='font-bold text-[#444d6c] '>{item.title}</p>
                    </div>
                    );                 
                    })}                    
               
            </div>
          </div>
          <div className="w-full  py-10 md:py-20 px-5 md:pl-80 md:pr-5 bg-[url('/school_bus_2.webp')] md:w-1/2"> </div>
       </section>
    </div>
  )
}
