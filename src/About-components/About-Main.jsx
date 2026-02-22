import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from 'react';

import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Quote, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, useScroll, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';

import '../../src/index.css'
import './About-Main.css'


const testimonials = [
  {
    id: 1,
    text: "I highly recommend Arab Falcon Bus Rental for their dedication and professionalism. The drivers and attendants are well-trained, kind, and attentive to the kids. The buses are clean, punctual, and safe. Their warm greetings and excellent service make every experience pleasant.",
    author: "Mj Saro",
    image: "team-3.webp"
  },
  {
    id: 2,
    text: "I've been using Arab Falcon Bus Rental LLC for my kids' school transportation and am highly impressed. The buses are clean, safe, and always on time. The drivers are professional, and the bus nannies are friendly, ensuring a comfortable ride. I highly recommend them for a stress-free and reliable transport service.",
    author: "Mj Saro",
    image: "avatar-1.webp"
  },
  {
    id: 3,
    text: "I'm very satisfied with Arab Falcon Bus Rental LLC school transportation. The buses are clean, safe, and always on time, giving me peace of mind. The drivers and attendants are professional and ensure the children’s comfort. I highly recommend them for a reliable and secure service.",
    author: "Gammanage Anusha",
    image: "avatar-2.webp"
  }
];

const logos = [
  { id: 1, src: 'Frame-11-1.png', alt: 'Dubai British School Jumeira' },
  { id: 2, src: 'Frame-12-1 (1).png', alt: 'Dubai British School Mira' },
  { id: 3, src: 'Frame-12-1.png', alt: 'Jumeira Baccalaureate School' },
  { id: 4, src: 'Frame-13-1.png', alt: 'Uptown International School' },
  { id: 5, src: 'Frame-14-1.png', alt: 'American Academy for Girls' },
  { id: 6, src: 'Frame-15-1.png', alt: 'Brighton College Dubai' },
  { id: 7, src: 'Frame-24-1.png', alt: 'Dubai British School Jumeira' },
  { id: 8, src: 'Frame-25-1.png', alt: 'Dubai British School Mira' },
  { id: 9, src: 'Frame-26.png', alt: 'Jumeira Baccalaureate School' },
  { id: 10, src: 'Frame-28.png', alt: 'Uptown International School' },
  { id: 11, src: 'Frame-16-1-768x570.png', alt: 'American Academy for Girls' },
];



export const AboutMain = () => {
  const { scrollY } = useScroll();
  const busOptions = [
    {
      id: 1,
      name: 'Our Vision',
      img: '34-Seater-Fuso-Rosa-School-Bus.webp',
      text: 'Safe & reliable school transportation for students and staff!',

      text2: 'Our mission at Arab Falcon is singularly focused on safety. We recognize that transporting students is a complex and delicate procedure that demands unwavering attention to detail and adherence to the highest safety standards. Our commitment is to prioritize the safety and security of every student entrusted to our care, ensuring a 100% safe transportation experience.'

    },
    {
      id: 2,
      name: 'Our Mission',
      img: '34-Seater-Fuso-Rosa-School-Bus.webp',
      text: 'transportation for students and staff!',

      text2: 'Our mission at Arab Falcon is singularly focused on safety. We recognize that transporting students is a complex and delicate procedure that demands unwavering attention to detail and adherence to the highest safety standards. Our commitment is to prioritize the safety and security of every student entrusted to our care, ensuring a 100% safe transportation experience.'

    },
    {
      id: 3,
      name: 'Our Values',
      img: '34-Seater-Fuso-Rosa-School-Bus.webp',
      text: 'Safe & reliable school transportation for students and staff!',

      text2: 'Our mission at Arab Falcon is singularly focused on safety. We recognize that transporting students is a complex and delicate procedure that demands unwavering attention to detail and adherence to the highest safety standards. Our commitment is to prioritize the safety and security of every student entrusted to our care, ensuring a 100% safe transportation experience.'

    }
  ];
  const [activeOption, setActiveOption] = useState(busOptions[0]);
  const [activeImage, setActiveImage] = useState(busOptions[1].img);

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
    <main>
      {/* Section1-hero */}
      <section className="hero-main bg-[url('/Frame-62.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center relative cms-eptitle-overlay">
        <div className='max-w-[1320px] py-10 px-5 md:px-10 md:py-40 w-full flex justify-center relative z-10'>
          <h2 className='md:text-[70px] text-white font-bold'>About Us</h2>
        </div>
      </section>

      {/* Section-2 */}


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

          </div>
        </div>
      </section>

      {/* Section-3 */}
      <section className='bg-primary py-10 px-5  md:py-30 md:px-10 w-full flex justify-center items-center'>
        <div className='max-w-[1320px] flex flex-col map gap-10'>
          <div className=' '>
            <p className='text-white'>Dedicated Customer Team and Agile Services</p>
            <div className='flex flex-col md:flex-row'>
              <h2 className='md:w-1/2 text-white mt-5'>Dedicated Transport Teams & Reliable Services</h2>
              <div className='flex flex-col md:w-1/2'>
                <p className=' text-white'>Providing safe and efficient transportation for students and staff!

                  <br />
                  <br />
                  Whether you’re a school or an organization, reliable transportation is essential for smooth operations. Our services ensure safe, timely, and comfortable travel for students and staff, helping you focus on education and growth.</p>
                <button className="slbutton1 w-[235px] h-16 ">Contact Head Office ➜</button>
              </div>
            </div>
          </div>
          <div className='flex shadow-md items-center justify-space-between gap-10 flex-col md:flex-row'>
            {/* Left Side: The List */}
            <div className="flex w-full md:w-[30%] flex-col border p-5 md:p-15 border-none">
              {busOptions.map((bus) => (
                <div
                  key={bus.id}
                  // 2. Update the state with the whole 'bus' object on hover
                  onMouseEnter={() => setActiveOption(bus)}
                  className={`group flex cursor-pointer items-center gap-4 border-b border-gold py-6 transition-all duration-300
      ${activeOption.id === bus.id ? 'bg-white' : 'hover:bg-white/10'}`}
                >
                  {/* Checkmark Circle */}
                  <div className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border-2 
      ${activeOption.id === bus.id ? 'border-gold bg-gold' : 'border-gold'}`}>
                    <span className={`text-sm font-bold ${activeOption.id === bus.id ? 'text-white' : 'text-gold'}`}>✓</span>
                  </div>

                  {/* Text Name */}
                  <span className={`text-lg font-semibold transition-colors
      ${activeOption.id === bus.id ? 'text-gold' : 'text-white'}`}>
                    {bus.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Side: The Dynamic Display */}
            <div className="flex flex-col md:flex-row w-full items-center justify-center pt-10 bg-white md:p-8 p-5">
              <img
                // 3. Use the image from the active state
                src={activeOption.img}
                alt={activeOption.name}
                className="h-auto md:w-1/2 w-full object-contain transition-all duration-500"
              />
              <div className="mt-6 text-center md:text-left">
                {/* 4. Correctly access the text properties from the state object */}
                <h3 className="text-2xl font-bold text-primary mb-2">{activeOption.text}</h3>
                <p className="text-gray-600">{activeOption.text2}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section-4 */}


      <section className='bg-[#F6F6F8] py-10 md:py-25 flex w-full justify-center items-center'>
        <div className='max-w-[1320px] flex flex-col justify-center gap-8 md:gap-20 h-auto px-6 items-center'>
          <div className='flex flex-col items-center gap-3'>
            <p className='text-center'>Trusted by leading organizations for safe and reliable transportation.
            </p>
            <h2 className='text-center'>Our Valued Clients
            </h2>
          </div>

          <div className='flex flex-col md:flex-row '>
            <div className='cms-team  p-5'>
              <div className='flex flex-col items-center bg-white'>
                <img src="team-1.png" alt="team" className='w-full h-auto' />
              </div>
              <div className='px-2 py-6 bg-gold'>
                <h4 className='text-center font-bold text-white text-[20px]'>Farah Shah</h4>
                <p className='text-white text-center '>Head of Operations and Transportation</p>
              </div>
            </div>
            <div className='cms-team  p-5'>
              <div className='flex flex-col items-center bg-white'>
                <img src="team-1.png" alt="team" className='w-full h-auto' />
              </div>
              <div className='px-2 py-6 bg-gold'>
                <h4 className='text-center font-bold text-white text-[20px]'>Farah Shah</h4>
                <p className='text-white text-center'>Head of Operations and Transportation</p>
              </div>
            </div>
            <div className='cms-team  p-5'>
              <div className='flex flex-col items-center bg-white'>
                <img src="team-1.png" alt="team" className='w-full h-auto' />
              </div>
              <div className='px-2 py-6 bg-gold'>
                <h4 className='text-center font-bold text-white text-[20px]'>Farah Shah</h4>
                <p className='text-white text-center'>Head of Operations and Transportation</p>
              </div>
            </div>
            <div className='cms-team  p-5'>
              <div className='flex flex-col items-center bg-white'>
                <img src="team-1.png" alt="team" className='w-full h-auto' />
              </div>
              <div className='px-2 py-6 bg-gold'>
                <h4 className='text-center font-bold text-white text-[20px]'>Farah Shah</h4>
                <p className='text-white text-center'>Head of Operations and Transportation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section-5 */}

      <section className="cms-overlay relative py-5 md:px-5 md:py-24 w-full bg-[url('/bus_driver.jpg')] bg-fixed bg-cover bg-center h-auto flex justify-center">
        <div className="relative w-full max-w-[1320px] h-auto overflow-hidden z-20">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
            className="h-full"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                {/* Background Overlay */}
                <div className="" />
                {/* Changed flex to flex-col-reverse for mobile, flex-row for medium+ screens */}
                <div className="relative z-20 flex flex-col-reverse md:flex-row h-full items-center px-6 md:px-12 py-8 md:py-0 text-white">

                  {/* Left Side: Content */}
                  <div className="w-full md:w-1/2 space-y-6 mt-8 md:mt-0 text-left md:text-left">
                    <Quote size={48} className="mx-auto md:mx-0" />
                    <p className="text-xl md:text-3xl italic font-bold leading-relaxed">
                      "{item.text}"
                    </p>
                    <div className="flex items-center justify-start md:justify-start gap-4">
                      <div className="prev-btn p-2 rounded-full bg-white/20 cursor-pointer"><ChevronLeft /></div>
                      <div className="next-btn p-2 rounded-full bg-white/20 cursor-pointer"><ChevronRight /></div>
                      <span className="font-bold">{item.author}</span>
                    </div>
                  </div>

                  {/* Right Side: Slanted Image (Appears on top in mobile due to flex-col-reverse) */}
                  <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end items-center">
                    <div
                      className="w-64 h-64 md:w-90 md:h-auto bg-white transform -rotate-12 overflow-hidden"
                      style={{ clipPath: 'polygon(0 47%, 100% 0, 100% 65%, 0% 100%)' }}
                    >
                      <img src={item.image} className="w-full h-full object-cover rotate-12 scale-125" />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Section-6 */}

      <section className='bg-white py-10 md:py-25 flex w-full justify-center items-center'>
        <div className='max-w-[1320px] flex flex-col justify-center gap-8 md:gap-20 h-auto px-6 items-center'>
          <div className='flex flex-col items-center gap-3'>
            <p className='text-center'>Trusted by leading organizations for safe and reliable transportation.
            </p>
            <h2 className='text-center'>Our Valued Clients
            </h2>
          </div>
          <div>
            <div className="marquee-container">
              <div className="marquee-content">
                {/* First set of logos */}
                {logos.map((logo) => (
                  <img key={`first-${logo.id}`} src={logo.src} alt={logo.alt} className="marquee-item" />
                ))}
                {/* Duplicate set for seamless looping */}
                {logos.map((logo) => (
                  <img key={`second-${logo.id}`} src={logo.src} alt={logo.alt} className="marquee-item" />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
