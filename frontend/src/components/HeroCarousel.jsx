// src/components/HeroCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const slides = [
  {
    image: banner1,
    heading: 'Big Electronics Sale',
    text: 'Up to 50% off on gadgets',
  },
  {
    image: banner2,
    heading: 'Trendy Fashion Deals',
    text: 'Discover new arrivals today',
  },
  {
    image: banner3,
    heading: 'Fresh Grocery',
    text: 'For healthy living',
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-[400px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.heading}</h2>
                  <p className="text-lg md:text-xl mb-4">{slide.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
