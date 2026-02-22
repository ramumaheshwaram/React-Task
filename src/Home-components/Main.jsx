import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';
import { motion, useScroll, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, ChevronDown, ArrowRight } from 'lucide-react';
import { Play } from 'lucide-react';


// Import Swiper styles
import '../../src/index.css'
import './main.css'
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

const cards = [
  { id: 1, image: 'passenger-r.jpg', title: 'Passenger Transportation', description: 'Professional and sophisticated corporate travel solutions ensuring punctuality, comfort, and productivity.', icon: 'svgviewer-png-output (13) (2).png', price: 'Read More ➜' },
  { id: 2, image: 'hotel_transport-r.jpg', title: 'Hotel Transportation', description: 'Comfortable and premium travel experiences for hotel guests.', icon: 'svgviewer-png-output (14) (2).png', price: 'Read More ➜' },
  { id: 3, image: 'school_bus_2-r.webp', title: 'School Transportation', description: 'Secure, reliable transport for students with advanced safety features.', icon: 'svgviewer-png-output (15) (2).png', price: 'Read More ➜' },
  { id: 4, image: 'passenger-r.jpg', title: 'Staff Transportation', description: 'Punctual and convenient transport for employees.', icon: 'svgviewer-png-output (16) (2).png', price: 'Read More ➜' },
];

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


export const Main = () => {
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

  // section-8//

  const busOptions = [
    { id: 1, name: 'Mitsubishi Rosa Bus', img: '34-Seater-Fuso-Rosa-School-Bus.webp' },
    { id: 2, name: 'Toyota Coaster Bus', img: 'Arab-Falcon-School-Bus-Toyota-Coaster-in-dubai.png' },
    { id: 3, name: 'Ashok Leyland Bus', img: 'IMG_2715.png' },
    { id: 4, name: 'White Toyota Coaster', img: '30-Seater-Toyota-Coaster.webp' },
    { id: 5, name: 'Luxury Bus', img: '35-Seater-Luxry.webp' },
  ];
  const [activeImage, setActiveImage] = useState(busOptions[1].img);
  // end//


  // section 9
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
  ///end section 9


  return (
    <main className="">
      {/* SECTION 1: Features */}
      <section className='bg-[#2e3192] py-12 flex w-full justify-center items-center'>
        <div className='max-w-[1320px] flex flex-wrap justify-between gap-x-2 gap-y-6 h-auto px-6 items-start'>
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

          <div className='w-full md:w-1/2 py-5 md:pr-28 z-1'>
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
          <div className='w-full md:w-1/2 p-5 sticky top-0'>
            <img src="Arab-Falcon-Bus-rental-dubai.png" alt="Arab Falcon Bus Rental Dubai" className='w-full h-auto' />
          </div>
        </div>
      </section>

      {/* SECTION 3: Services Header */}
      <section className="cms-overlay relative py-24 w-full bg-[url('/slide01.jpg')] bg-fixed bg-cover bg-center h-120">
        <div className="absolute inset-0" />
        <div className="relative z-10 text-white flex flex-col items-center px-6">
          <p className='font-bold tracking-widest mb-2 uppercase'>Our Services</p>
          <h2 className='font-bold text-center text-3xl md:text-5xl text-white'>
            As Brilliant as the Customers We Serve
          </h2>
        </div>
      </section>

      {/* SECTION 4: Swiper Slider */}
      <section className='px-6 md:px-10 flex flex-col items-center justify-center w-full py-20 bg-[#efefef]'>
        <div className="w-full max-w-[1320px] mt-[-100px] md:mt-[-300px] z-20 ">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            className="my-slider"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="pb-12">
                <div className="product-card group h-full ">
                  <div className="product-image-wrapper">
                    <img src={card.image} alt={card.title} className="product-image group-hover:scale-110" />
                  </div>
                  <div className="product-info">
                    <img src={card.icon} alt="icon" />
                    <a href="#">
                      <h3 className="font-bold text-[24px] text-[#]">{card.title}</h3>
                    </a>
                    <p className="text-black text-base1 line-clamp-3">{card.description}</p>
                    <a href="#" className='button1 w-[180px] p-5 h-16 text-center'>
                      {card.price}
                    </a>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className='text-gray-600 max-w-[500px] text-center mt-10'>
          We are committed to enhancing our services with modern technology, ensuring greater convenience, efficiency, and value for our customers.
        </p>
        <a href="#" className='w-[234px] p-5 bg-gold hover:bg-primary text-white font-semibold h-16 text-center mt-6 text-base1'>Explore All Services  ➜</a>
      </section>

      {/* SECTION 5: Swiper Slider */}
      <section className='bg-white flex justify-center max-md:flex-col'>
        <div className='max-w-[1320px] flex items-start pt-25 px-5 w-full relative max-md:flex-col h-auto z-10'>
          <div className=' w-[32%] max-md:w-full h-100%'>
            <div className='bg-primary p-18 rounded-tr-3xl rounded-bl-3xl max-md:p-8 max-w-full flex flex-col gap-5 group relative'>
              <div className="text-5xl font-bold text-white">
                <Counter target={97} />
                <span>%</span>
              </div>
              <img src="svgviewer-png-output (17) (1).png" alt="icon" className='w-[145px] max-md:w-[80px] absolute bottom-10 right-10 z-0 group-hover:animate-bounce-once' />
              <div className='text-white text-2xl font-bold'>Customer Satisfaction
              </div>
              <p className='text-white font-bold'>Based on 750+ reviews of works and projects across 22 schools, with 50,000+ Happy Clients who deeply trust our services.
              </p>
              <a href="#" className='w-[180px] p-5 bg-white hover:bg-gold text-gold hover:text-white font-semibold h-16 text-center mt-6 text-base1 z-1'>Get Started ➜</a>
            </div>
          </div>

          <div className='w-[68%] max-w-full max-md:w-full sticky top-0'>
            <div className='bg-gold py-10 px-5 rounded-tl-3xl rounded-br-3xl w-full flex max-sm:flex-col max-md:w-full max-md:p-8'>
              <div className='w-[33%] max-sm:w-full p-10 flex flex-col gap-5 border-r-2 border-primary group max-sm:border-0'>
                <img src="svgviewer-png-output (18) (1).png" alt="icon" className='w-[64px] h-auto mb-10 group-hover:animate-bounce-once' />
                <div className="text-5xl  text-white mt-2"><Counter target={350} /></div>
                <p className='text-white text-2xl font-bold'>Buses</p>
              </div>
              <div className='w-[33%] max-sm:w-full p-10  flex flex-col gap-5 border-r-2 border-primary group max-sm:border-0' >
                <img src="svgviewer-png-output (14) (1).png" alt="icon" className='w-[64px] h-auto mb-10 group-hover:animate-bounce-once' />
                <div className="text-5xl  text-white mt-2"><Counter target={23} /></div>
                <p className='text-white text-2xl font-bold'>Schools</p>
              </div>
              <div className='w-[33%] max-sm:w-full p-10 flex flex-col gap-5 group'>
                <img src="svgviewer-png-output (19) (1).png" alt="icon" className='w-[64px] h-auto mb-10 group-hover:animate-bounce-once' />
                <div className="text-5xl  text-white mt-2"><Counter target={575} /></div>
                <p className='text-white text-2xl font-bold'>Plus Staff</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 6: Services Header */}
      <section className="cms-gradient relative pt-40 md:pt-60 pb-8 md:pb-24 px-5 md:px-10 w-full bg-[url('/dubai_buses.jpg')] bg-fixed bg-cover bg-center h-auto mt-[-134px] flex max-sm:flex-col justify-center gap-15 md:gap-3">
        <div className='w-full sm:w-[58%] flex flex-col text-white z-3'>
          <p className='text-base font-bold'>
            Safe & Reliable School & Staff Transport Solutions That Save Your Time
          </p>
          <h2 className='text-white '>We continue to uphold our vision in today's fast-paced world, ensuring safe, timely, and comfortable transportation every day while earning the trust of our valued passengers!</h2>
          <div className="flex gap-4 mt-4 flex-col sm:flex-row">
            <button className="slbutton h-14">Contact Head Office  ➜</button>
            <button className="slbutton1 h-14">Our Services</button>
          </div>
        </div>
        <div className='w-full sm:w-[33%] z-5 flex justify-center items-center'>
          <div className='box-178'>
            <div className='box-88'>
              <img src="svgviewer-png-output (20) (1).png" alt="" />
            </div>
            <div className='cms--ripple' />
          </div>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className='bg-white py-10 md:py-25 flex w-full justify-center items-center'>
        <div className='max-w-[1320px] flex flex-col justify-center gap-8 md:gap-20 h-auto px-6 items-center'>
          <div className='flex flex-col items-center gap-3'>
            <p className='text-center'>Diverse & Safe Fleet for Every Transportation Need
            </p>
            <h2 className='text-center'>Innovation with technology
            </h2>
          </div>
          <div className='flex justify-center md:flex-row flex-col items-center '>
            {[
              { img: "laptop.png", title: "Online Registration", desc: "Seamless Online Registration for School Bus & Staff Transport – Safe, Reliable, and Convenient!" },
              { img: "svgviewer-png-output (22) (1).png", title: "Approval and Confirmation", desc: "Get quick approval and confirmation for your school bus and staff transport booking!" },
              { img: "svgviewer-png-output (23) (1).png", title: "Door to Door Pickup", desc: "Convenient door-to-door pickup for a safe and hassle-free journey!" },
              { img: "svgviewer-png-output (24) (1).png", title: "Live GPS Tracking", desc: "All buses are equipped with GPS tracking." }
            ].map((item, index) => (
              <div key={index} className='w-full sm:w-[45%] lg:w-[23%] h-[30vh]  group border-1 border-[#eaeaea] py-10 px-7 relative group flex flex-col items-center'>
                <div className='w-[88px] h-[88px] bg-gold group-hover:bg-primary flex justify-center items-center '>
                  <img src={item.img} alt="icon" className="w-12 h-12 object-contain group-hover:animate-bounce-once" />
                </div>
                <p className='text-[#030f39] text-lg font-bold mt-4 text-center'>{item.title}</p>
                <p className='text-black text-base mt-2 text-center'>{item.desc}</p>
                <span className='absolute bg-[#EAEAEA] text-gold w-[48px] rounded-full
                h-[48px] text-center p-3 right-[-25px] top-[50%] group-hover:shadow-[0_0_0_10px_#eaeaea] transition-shadow duration-300
' >
                  ➜
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: Features */}
      <section className='bg-[#2e3192] px-4 py-10 md:py-22 flex w-full justify-center items-center'>
        <div className='w-full max-w-[1320px] flex flex-col gap-4'>
          <div className='p-5 bg-primary shadow-[0_5px_85px_0_#6c00001f] text-white'>
            <p>Our Fleets</p>
            <h2 className='text-white'>
              Transforms
              <br />
              the Ride to School
            </h2>
          </div>
          <div className='flex max-md:flex-col'>
            <div className=' w-full md:w-[33%] relative flex'>
              <img src="Transport_top-right.png" alt="transport" />
              <div className='cms-moving' />
            </div>
            <div className='w-full md:w-[58%]'>
              <div className="flex items-center justify-center md:px-10 py-3">
                <div className="flex w-full  items-start gap-10 max-sm:flex-col">

                  {/* Left Side: The List */}
                  <div className="flex w-full md:w-[40%] flex-col border-t border-gold">
                    {busOptions.map((bus) => (
                      <div
                        key={bus.id}
                        onMouseEnter={() => setActiveImage(bus.img)}
                        className={`group flex cursor-pointer items-center gap-4 border-b border-gold py-6 transition-all duration-300
                ${activeImage === bus.img ? 'bg-white' : 'hover:bg-white/10'}`}
                      >
                        {/* Checkmark Circle */}
                        <div className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border-2 
                ${activeImage === bus.img ? 'border-gold bg-gold' : 'border-gold'}`}>
                          <span className={`text-sm font-bold ${activeImage === bus.img ? 'text-white' : 'text-gold'}`}>✓</span>
                        </div>

                        {/* Text Name */}
                        <span className={`text-lg font-semibold transition-colors
                ${activeImage === bus.img ? 'text-gold' : 'text-white'}`}>
                          {bus.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Right Side: The Dynamic Image Display */}
                  <div className="flex md:w-[58%] items-center justify-center pt-10">
                    <img
                      src={activeImage}
                      alt="Selected Bus"
                      className="h-auto w-full max-w-2xl object-contain transition-opacity duration-500"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 9 */}
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

      {/* SECTION 10: Services Header */}
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

      {/* SECTION 11 */}
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

      {/* SECTION 12: Services Header */}
      <section className="cms-gradient1 relative md:py-24 md:px-5 py-10 px-5 w-full bg-[url('/dubai_buses.jpg')] bg-fixed bg-cover bg-center h-auto flex max-sm:flex-col justify-center gap-15 md:gap-3">

        <div className='max-w-[1320px] z-10 flex justify-center gap-15 max-md:flex-col it'>
          <div className='w-full sm:w-[43%] flex flex-col text-white z-3 gap-2 items-start justify-center'>

            <h2 className='text-white '>Providing reliable services in the sphere of school transportation across Dubai</h2>
            <p className='text-base '>
              We pursue that same vision in today's complex world, working every day to earn our customers’ trust! We are a dedicated school transportation provider, offering a full range of safe and reliable transport services for educational institutions.
            </p>
            <div className="flex gap-4 mt-4 flex-col sm:flex-row ">
              <a
                href="#"
                className="bg-white p-4 h-15 font-bold text-gold transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                Contact Head Office ➜
              </a>
              <a
                href="#"
                className="bg-transprent p-4 h-15 font-bold border-white border-2 hover:border-primary text-white transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                Explore More
              </a>
            </div>
          </div>
          <div className='w-full sm:w-[48%] z-5 flex justify-center items-start flex-col bg-white p-10 gap-5'>
            <p className='text-[24px] text-[#030f39] font-bold'>Request A Quote</p>
            <p className='text-base text-[#000000]]'>Interested in cooperation or have questions? Just fill out the form and we will call you back. Or you can call us and our specialists will provide the necessary help!</p>
            <form className="space-y-6 w-full" onSubmit={(e) => e.preventDefault()} >
              {/* Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* First Name */}
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 border border-gray-300  focus:outline-none focus:border-blue-900 placeholder-gray-400"
                />

                {/* Last Name */}
                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-4 border border-gray-300 focus:outline-none focus:border-blue-900 placeholder-gray-400"
                />

                {/* Email Address */}
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 border border-gray-300 focus:outline-none focus:border-blue-900 placeholder-gray-400"
                />

                {/* Phone Number */}
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 border border-gray-300 focus:outline-none focus:border-blue-900 placeholder-gray-400"
                />

                {/* Service Type (Select) */}
                <div className="relative">
                  <select
                    required
                    defaultValue=""
                    className="w-full p-4 border border-gray-300  focus:outline-none focus:border-blue-900 appearance-none text-gray-400 bg-white"
                  >
                    <option value="" disabled>Service Type</option>
                    <option value="freight">Freight</option>
                    <option value="logistics">Logistics</option>
                    <option value="storage">Storage</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>

                {/* City of Departure */}
                <input
                  required
                  type="text"
                  placeholder="City of Departure"
                  className="w-full p-4 border border-gray-300 focus:outline-none focus:border-blue-900 placeholder-gray-400"
                />

                {/* Destination */}
                <input
                  required
                  type="text"
                  placeholder="Destination"
                  className="w-full p-4 border border-gray-300 focus:outline-none focus:border-blue-900 placeholder-gray-400"
                />

                {/* Company Name */}
                <input
                  required
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-4 border border-gray-300 focus:outline-none focus:border-blue-900 placeholder-gray-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#2E3192] hover:bg-blue-900 transition-colors text-white font-bold py-4 px-8 flex justify-between items-center group"
              >
                <span className="text-lg">Submit Your Request</span>
                <div className="bg-white p-2  group-hover:scale-110 transition-transform">
                  <ArrowRight className="text-[#2E3192]" size={20} />
                </div>
              </button>
            </form>
          </div>
        </div>

      </section>
      {/* SECTION 13 */}
      <section className='bg-white py-10 md:py-25 flex w-full justify-center items-center'>
        <div className='max-w-[1320px] flex flex-col justify-center gap-8 md:gap-20 h-auto px-6 items-center'>
          <div className='flex flex-col items-center gap-3'>
            <p className='text-center'>Trusted by leading organizations for safe and reliable transportation.
            </p>
            <h2 className='text-center'>Our Valued Clients
            </h2>
          </div>


        </div>
      </section>
    </main>
  );
};