import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
    <Image
      src="/assets/img/modern-wall-at-collection.jpg"
      alt="Product Banner"
      layout="fill"
      objectFit="cover"
      className="brightness-50"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Premium Products</h1>
        <p className="text-xl md:text-2xl">Elevate Your Space with Style</p>
      </div>
    </div>
  </section>
  )
}

export default Hero