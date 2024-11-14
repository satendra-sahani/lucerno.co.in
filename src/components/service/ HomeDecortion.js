'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HomeDecoration = () => {
  const images = [
    { src: "/assets/home-decor/living-room.jpg", alt: "Living Room", direction: { hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } } },
    { src: "/assets/home-decor/bedroom.jpg", alt: "Bedroom", direction: { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } } },
    { src: "/assets/home-decor/kitchen.jpg", alt: "Kitchen", direction: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } } },
    { src: "/assets/home-decor/bathroom.jpg", alt: "Bathroom", direction: { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } } },
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-700 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-gray-900">
            Home Decoration
          </span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.alt}
                initial="hidden"
                animate="visible"
                variants={image.direction}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">Transform Your Living Space</h3>
            <p className="text-muted-foreground text-lg">
              Our exquisite home decor collection brings elegance and charm to any room. From stylish wall art to cozy throw pillows, we have everything you need to create a personalized and inviting atmosphere.
            </p>
            <button 
              size="lg"
              className="bg-gradient-to-r from-cyan-700 to-gray-900 text-white font-semibold py-2 px-6 rounded-full hover:from-pink-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeDecoration