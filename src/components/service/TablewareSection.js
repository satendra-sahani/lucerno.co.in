'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Star } from 'lucide-react'

export default function InspiringTableware() {
  const images = [
    { src: "/assets/tableware/tableware13.jpg", alt: "Elegant dining set" },
    { src: "/assets/tableware/tableware14.jpg", alt: "Modern tableware collection" },
    { src: "/assets/tableware/tableware15.jpg", alt: "Rustic place setting" },
    { src: "/assets/tableware/tableware16.jpg", alt: "Luxury silverware" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-gray-900">
            Inspiring Tableware
          </span>
        </motion.h1>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Elevate Your Dining Experience</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Discover our exquisite tableware collection that combines timeless elegance with modern sophistication. 
                  From intimate dinners to grand celebrations, our pieces are designed to make every meal memorable.
                </p>
               
                <button className="group bg-gradient-to-r from-cyan-700 to-gray-900 text-white font-semibold py-3 px-6 rounded-full hover:from-pink-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Explore Collection
                  <ChevronRight className="ml-2 w-5 h-5 inline-block transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Featured Collection</h3>
                <p className="text-white/80">Discover our latest arrivals and bestsellers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}