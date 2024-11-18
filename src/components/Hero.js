'use client'

import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ResponsiveSlider() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
  }

  const slides = [
    { id: 1, src: '/assets/home-page-img/banner1.jpg', alt: 'Slide 1' },
    { id: 2, src: '/assets/home-page-img/banner2.jpg', alt: 'Slide 2' },
    { id: 3, src: '/assets/home-page-img/banner3.jpg', alt: 'Slide 3' },
    { id: 4, src: '/assets/home-page-img/banner4.jpg', alt: 'Slide 4' },
    { id: 5, src: '/assets/home-page-img/banner5.jpg', alt: 'Slide 5' },
  ]

  if (!mounted) return null

  return (
    <div className="w-full mx-auto overflow-hidden">
      <Slider {...settings} className="custom-dots">
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
          </div>
        ))}
      </Slider>
    </div>
  )
}