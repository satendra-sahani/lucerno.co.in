'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  {
    name: 'Product Tableware',
    description: 'Elevate your dining experience with our elegant tableware collection.',
    src: '/assets/tableware/tableware6.jpg',
  },
  {
    name: 'Home Decoration',
    description: 'Transform your space with our exquisite home decor items.',
    src: '/assets/home-decor/home-bg.jpg',
  },
  {
    name: 'Caramel Tiles',
    description: 'Add warmth and style to your floors with our premium caramel tiles.',
    src: '/assets/ceramic-tiles/classic-white-tile.jpg',
  },
]

export default function DynamicHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={products[currentIndex].src}
            alt={products[currentIndex].name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
                Discover Our{' '}
                <span className="text-primary">{products[currentIndex].name}</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg sm:text-xl md:text-2xl">
                {products[currentIndex].description}
              </p>
              <a
                href="/lucerno-porcelain-collection"
                className="inline-block rounded-full bg-primary px-8 py-3 text-lg border border-white font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Explore Now
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}