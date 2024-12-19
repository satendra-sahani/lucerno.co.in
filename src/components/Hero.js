'use client'

import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    id: 1,
    src: 'https://plus.unsplash.com/premium_photo-1714702846959-a4b4b38c76f0?w=1200&q=80',
    alt: 'Make your on ceramic tableware sets',
    title: 'Make your on ceramic tableware sets',
    subtitle: 'Introducing Lucerno ceramic tableware set maker',
    cta: 'Know More'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1658236559448-bef7596c99fd?w=1200&q=80',
    alt: 'Create Lasting Impressions',
    title: 'Create Lasting Impressions',
    subtitle: 'Explore our Premium Cement Tile Series',
    cta: 'Discover More'
  },
  {
    id: 3,
    src: 'https://plus.unsplash.com/premium_photo-1666974267974-5d1199b7d51e?w=1200&q=80',
    alt: 'Dive into Luxury',
    title: 'Dive into Luxury',
    subtitle: 'Discover our Exclusive',
    cta: 'Discover More'
  },
  {
    id: 4,
    src: 'https://plus.unsplash.com/premium_photo-1714702846361-286897ba112a?w=1200&q=80',
    alt: 'Classic and Contemporary',
    title: 'Classic and Contemporary',
    subtitle: 'Unveil the Charm ',
    cta: 'Discover More'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1597758464605-aa125b827c33?w=1200&q=80',
    alt: 'Lucerno Studio',
    title: 'Lucerno Studio',
    subtitle: 'Where Tradition Meets Trend',
    cta: 'Discover More'
  }
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div className="absolute bottom-8 w-full">
        <ul className="flex justify-center items-center gap-4"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className={`relative w-3 h-3 transition-all duration-500 ${
          i === currentSlide 
            ? 'scale-150' 
            : 'scale-100 hover:scale-125'
        }`}
        aria-label={`Go to slide ${i + 1}`}
      >
        <span className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/40" />
        <span className={`absolute inset-0 rounded-full transition-all duration-500 ${
          i === currentSlide
            ? 'bg-white scale-100'
            : 'bg-white/50 scale-75 group-hover:scale-100'
        }`} />
      </button>
    )
  }

  if (!mounted) return null

  return (
    <div className="relative w-full mx-auto overflow-hidden group">
      <Slider {...settings} className="[&_.slick-slide]:relative [&_.slick-slide]:block [&_.slick-track]:flex">
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={slide.id === 1}
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-24">
              <div className="max-w-xl space-y-6 animate-fade-in">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-lg max-w-lg">
                  {slide.subtitle}
                </p>
                <button className="group/btn inline-flex items-center px-8 py-3 text-sm sm:text-base text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
                  <span className="relative z-10">{slide.cta}</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
        onClick={() => (document.querySelector('.slick-prev'))?.click()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
        onClick={() => (document.querySelector('.slick-next') )?.click()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .slick-slide {
          transition: opacity 0.8s ease;
        }
        .slick-active {
          opacity: 1;
        }
        .slick-dots {
          z-index: 50;
        }
        .slick-dots li {
          margin: 0;
        }
        .slick-dots li button:before {
          display: none;
        }
        /* Hide default arrows */
        .slick-prev,
        .slick-next {
          display: none !important;
        }
      `}</style>
    </div>
  )
}

