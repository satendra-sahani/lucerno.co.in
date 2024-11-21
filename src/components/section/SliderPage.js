'use client'

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SliderPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  }

  const images = [
    {
        img:'/assets/ceramic-tiles/granite-look-tile.jpg',
        title:"Ceramic Tiles"
    },
    {
        img:  '/assets/catalog/catalog2.jpg',
        title:"Catalog"
    },
    {
        img:'/assets/home-decor/home-deco7.jpg',
        title:"Home Decoration"
    },
    {
        img:'/assets/tableware/tableware4.jpg',
        title:"Tableware"
    },
    {
        img:'/assets/home-page-img/bathroom-tiles4.jpg',
        title:"Ceramic Tiles"
    },
    {
        img: '/assets/ceramic-tiles/granite-look-tile.jpg',
        title:"Ceramic Tiles"
    },
    {
        img:'/assets/catalog/catalog2.jpg',
        title:"Catalog"
    },
    {
        img:'/assets/home-decor/home-deco7.jpg',
        title:"Home Decoration"
    },
    {
        img: '/assets/tableware/tableware4.jpg',
        title:"Tableware"
    },
    {
        img:'/assets/home-page-img/bathroom-tiles4.jpg',
        title:"Ceramic Tiles"
    },
     
  ]

  return (
    <>
    <h1 class="text-6xl  mt-4  font-extrabold text-center text-gray-900 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">New collection</h1>
    <div className="w-full container mx-auto px-4 py-8 bg-gray-900 rounded-lg mt-3">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative w-full pt-[100%] overflow-hidden border-2 border-white rounded-full">
              <Image
                src={item.img}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className='text-center text-white mt-4 font-bold'>{item.title}</p>
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}
