import React from 'react'
import '../Home-components/Hero.css'
import '../../src/index.css'
import { useEffect, useState } from "react";


export const Hero = () => {
  const slides = [
    {
      img: "school_bus_2.webp",
      title: "School Transportation",
      desc: "Ensuring safe and secure transportation for students with modern, well-equipped buses and trained drivers. Our school transportation services are designed to provide parents and schools with peace of mind, knowing that students are transported safely and punctually. Each vehicle is fitted with advanced safety features, including GPS tracking, seat belts, and CCTV monitoring for an extra layer of security",
      slbutton: "Our Services",
      slbutton1: "About Us",
      thumimg: "svgviewer-png-output (4) (1).png"
    },
    {
      img: "staff_tpt.jpg",
      title: "Staff Transportation",
      desc: "Reliable and efficient staff transportation solutions designed to accommodate employee commutes comfortably and punctually. We offer flexible routing options, ensuring employees reach their workplaces on time with minimal hassle. Our fleet consists of air-conditioned, spacious, and well-maintained buses to enhance commuting experiences for employees from all industries.",
      slbutton: "Our Services",
      slbutton1: "About Us",
      thumimg: "svgviewer-png-output (5) (1).png"

    },
    {
      img: "hotel_transport.jpg",
      title: "Hotel Transportation",
      desc: "Luxurious and seamless hotel transportation services, enhancing guest experiences with premium travel comfort. We cater to hotels and resorts, providing airport pickups, city tours, and business transfers. Our professional chauffeurs ensure guests experience smooth, comfortable, and stress-free travel while upholding the highest standards of hospitality and professionalism",
      slbutton: "Our Services",
      slbutton1: "About Us",
      thumimg: "svgviewer-png-output (6) (1).png"

    },
    {
      img: "passenger.jpg",
      title: "Passenger Transportation",
      desc: "Professional and sophisticated corporate travel solutions ensuring punctuality, comfort, and productivity. We cater to businesses by providing executive transportation services for meetings, corporate events, and employee commutes. Our vehicles are equipped with Wi-Fi, charging ports, and plush seating to create a professional and comfortable travel experience.",
      slbutton: "Our Services",
      slbutton1: "About Us",
      thumimg: "svgviewer-png-output (7) (1).png"

    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };
  return (
    <div className="slider-wrapper max-md:h-50vh">

      <div className="slider flex flex-col justify-around max-md:h-50vh max-md:align-baseline">
        <div className="list h-screen w-full relative overflow-hidden">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`item absolute inset-0 ${index === activeIndex ? "active" : ""
                }`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover max-md:h-50vh"
              />

              <div className="content absolute z-10 text-white">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>

                <div className="flex gap-4 mt-4">
                  <button className="slbutton">{slide.slbutton}</button>
                  <button className="slbutton1">{slide.slbutton1}</button>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Thumbnails */}
        <div className="thumbnail absolute bottom-20 right-10 flex gap-4 z-20">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`item cursor-pointer ${index === activeIndex ? "active" : ""
                }`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={slide.thumimg} alt={slide.title} />
              <div className="thump">{slide.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="arrows absolute inset-y-1/2 w-full flex justify-between px-6 z-20">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>

    </div>
  );


}
