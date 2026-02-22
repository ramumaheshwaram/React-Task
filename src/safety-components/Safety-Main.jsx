import React from 'react'
import { motion, useScroll, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';
import { useEffect } from 'react';
import './Safety-Main.css'

export const SafetyMain = () => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 1500], [0, 350]);
  const smoothY = useSpring(yRange, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const Counter = ({ target, duration = 3 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    // This hook ensures the animation triggers when the component mounts
    useEffect(() => {
      const controls = animate(count, target, { duration });
      return controls.stop;
    }, [target, count, duration]);

    return <motion.span>{rounded}</motion.span>;
  };
  return (
    <div>
      {/* Section1-hero */}
      <section className="hero-main bg-[url('/safety-scaled.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center relative cms-eptitle-overlay">
        <div className='max-w-[1320px] py-10 px-5 md:px-10 md:py-40 w-full flex justify-center relative z-10'>
          <h2 className='md:text-[70px] text-white font-bold'> Safety & Commitment</h2>
        </div>
      </section>

      {/* SECTION 2: About */}
      <section className='bg-white w-full flex justify-center items-center'>
        <div className='flex flex-col py-10 md:py-25 md:flex-row max-w-[1320px] w-full justify-between items-start gap-10 px-6 relative'>
          <div className="cms-movings absolute top-0 z-0 hidden md:block md:left-[-50px]">
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

          <div className='w-full md:w-[42%]  z-1'>
            <p className='text-base1 text-[#2e3192]'>Who we are ?</p>
            <h2 className='mt-2'>
              Safety & Commitment
            </h2>
            <p className='mt-4 text-body'>
              Safety is our top priority. We adhere to the highest industry standards, regularly maintain our fleet, and ensure that all drivers are professionally trained to provide a secure journey. Our vehicles are equipped with emergency exits, seat belts, GPS tracking, and first-aid kits, ensuring a safe travel experience for all passengers. We also conduct routine safety drills and driver training to maintain high operational standards.
            </p>
          </div>
          <div className='w-full md:w-[58%]  md:pl-15 relative'>
            <img src="safety_training.jpg" alt="Arab Falcon Bus Rental Dubai" className='w-full h-auto' />
            <div className='bg-gold p-10 border-l-6 border-primary md:w-[40%] group md:absolute bottom-0 left-25'>
              <img src="svgviewer-png-output (8) (1).png" alt="icon" className='group-hover:animate-bounce-once w-[48px]' />
              <p className='text-white text-lg font-semibold mt-5'> Safety, Reliability, Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* section-3 */}
      <section className='border-t-1 border-[#eaeaea] flex justify-center'>
        <div className='w-[1320px] flex flex-col md:flex-row justify-center items-center'>
          <div className='p-5 w-full md:w-[25%] md:py-15 md:px-10 border-r-1 border-[#eaeaea] flex flex-col
          gap-20'>
            <div className="text-5xl  text-primary mt-2"><Counter target={350} /></div>
            <p className='text-black text-2xl font-bold'>Buses</p>
          </div>
          <div className='p-5 w-full md:w-[25%] md:py-15 md:px-10 border-r-1 border-[#eaeaea] flex flex-col
          gap-20'>
            <div className="text-5xl  text-primary mt-2"><Counter target={350} /></div>
            <p className='text-black text-2xl font-bold'>Buses</p>
          </div>
          <div className='p-5 w-full md:w-[25%] md:py-15 md:px-10 border-r-1 border-[#eaeaea] flex flex-col
          gap-20'>
            <div className="text-5xl  text-primary mt-2"><Counter target={350} /></div>
            <p className='text-black text-2xl font-bold'>Buses</p>
          </div>
          <div className='p-5 w-full md:w-[25%] md:py-15 md:px-10 border-r-1 border-[#eaeaea] flex flex-col
          gap-20'>
            <div className="text-5xl  text-primary mt-2"><Counter target={350} /></div>
            <p className='text-black text-2xl font-bold'>Buses</p>
          </div>

        </div>
      </section>
      {/* Section-4 */}
      <section className="flex items-center justify-center relative cms-gradient1 md:py-20 md:px-10 px-5 py-10" >
        <div className='z-3 flex flex-col md:flex-row gap-10  max-w-[1320px] w-full'>
          <div className='md:w-1/2 md:p-5 flex flex-col gap-10'>
            <h2 className='text-white'>Safety</h2>
            <p className='text-white'> At Arab Falcon Bus Rental LLC, we prioritize the safety of our students above all else. We employ a comprehensive safety management system that includes regular vehicle inspections, driver training programs, and adherence to RTA regulations. Additionally, our helpers are required to perform thorough checks once all students have exited the bus. They must press the 'bus scan' button on the Attendance App, confirming that all students have disembarked from the bus. This action ensures accurate tracking and accountability for all students during drop-off procedures. Subsequently, the driver is instructed to switch off the bus by walking towards the end of the bus, ensuring that all students disembarked before doing so. Furthermore, our foreman conducts a final check to ensure that no student is left behind, guaranteeing the utmost safety and security for our students during their transportation to and from school. All Arab Falcon Bus Rental LLC vehicles are equipped with seat belts, GPS tracking systems, CCTV cameras and mobile communication devices to enhance safety and security.
            </p>
          </div>
          <div className='md:w-[41%] flex justify-center items-center'>
            <img src="17-scaled.jpg" alt="image" className='' />
          </div>
        </div>

      </section>
      {/* Section-5 */}


      <section className='bg-white w-full flex justify-center items-center'>
        <div className='flex flex-col py-10 md:py-25 md:flex-row max-w-[1320px] w-full justify-between items-start gap-10 px-6 relative'>



          <div className='w-full md:w-1/2  '>
            <img src="reliable-scaled.jpg" alt="Arab Falcon Bus Rental Dubai" className='w-full h-auto' />
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
            <p className='text-base1 text-[#2e3192]'>Who we are ?</p>
            <h2 className='mt-2'>
              Reliable & Comfortable Transportation Solutions for Every Journey
            </h2>
            <p className='mt-4 text-body'>
              At Arab Falcon Bus Rental LLC Services, we pride ourselves on delivering top-notch transportation solutions tailored to meet the unique needs of our clients. With a fleet of modern vehicles and a commitment to safety, we ensure a smooth and stress-free travel experience every time. Our focus is on providing high-quality, reliable, and customer-centric services that cater to schools, businesses, tourists, and special events. Trust us to make your journeys safer, more comfortable, and perfectly planned.
            </p>

            <div className='flex max-sm:flex-col gap-5 mt-8'>
              <button className='w-[180px] py-2 bg-gold hover:bg-primary text-white font-semibold h-16'>
                Explore More
              </button>
              <button className='button1 w-[180px] py-2'>
                Contact Us
              </button>
            </div>
            <div className='bg-[#f9f9f9] px-12 py-12 max-sm:px-5 relative mt-6 md:mt-16'>
              <p className='text-lg text-gold font-bold'>
                Let’s act now to reinvent student transportation for the future that we want to live, learn and travel in.
              </p>
              <img className='w-40px h-auto absolute right-5 bottom-5' src="text-acent.png" alt="text-acent" />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
