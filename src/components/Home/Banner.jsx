'use client';
import { useEffect, useState } from 'react';
import { ImYoutube } from "react-icons/im";

const slides = [
  {
    id: 1,
    bg: '/images/bg.jpg',
    title: 'Build Fast, Launch Faster',
    subtitle: 'Empower your business with modern web tech',
  },
  {
    id: 2,
    bg: '/images/bg-1.jpg',
    title: 'Your Vision, Our Code',
    subtitle: 'Crafting digital experiences that matter',
  },
  {
    id: 3,
    bg: '/images/webde.jpg',
    title: 'Web Development ',
    subtitle: 'Crafting digital experiences that matter',
  },
];

// ✅ Static image
const rightImage = '/images/hero-banner-imag.jpg';

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="w-full h-full bg-black/60 px-6 md:px-20 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
              {/* Left Text */}
              <div className="color-wt space-y-5 animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
                <button className="bg-color hover:bg-hover color-wt px-6 py-2 rounded-full transition">
                  Contact Now !
                </button>
              </div>

              {/* Right Static Image */}
              <div className="hidden md:block animate-fadeInRight">
                {/* <ImYoutube className='text-red-500 w-96 youtube-icon' /> */}
                 <div className="relative flex items-center justify-center">
                  <ImYoutube className="text-red-500 text-6xl youtube-icon relative z-10" />
                  <span className="absolute w-20 h-20 rounded-full border-2 border-red-400 animate-spin-slow"></span>
                  <span className="absolute w-28 h-28 rounded-full border-2 border-red-200 animate-ping"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
