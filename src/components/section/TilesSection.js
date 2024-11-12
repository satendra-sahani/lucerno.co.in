'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Marble Finish Tile', price: '₹89/sq.ft', image: '/assets/ceramic-tiles/marble-finish-tile.jpg' },
  { id: 2, name: 'Wooden Texture Tile', price: '₹99/sq.ft', image: '/assets/ceramic-tiles/wooden-texture-tile.jpg' },
  { id: 3, name: 'Classic White Tile', price: '₹79/sq.ft', image: '/assets/ceramic-tiles/classic-white-tile.jpg' },
  { id: 4, name: 'Granite Look Tile', price: '₹109/sq.ft', image: '/assets/ceramic-tiles/granite-look-tile.jpg' },
]

export default function TilesSection() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8 mt-5">
      <h1 className="text-6xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Ceramic Tiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
        <motion.div 
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div 
                className="p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === product.id ? 1 : 0.8 }}
              >
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="bg-gray-100 p-6 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Ceramic Tiles Collection</h2>
          <p className="text-gray-700 mb-4">
            Discover our premium range of ceramic tiles, designed to bring elegance and durability to any space. From marble finishes to wooden textures, our collection offers a variety of styles for modern homes.
          </p>
          <p className="text-gray-700 mb-4">
            Each tile is crafted with high-quality materials, ensuring longevity and beauty. Whether you're looking for tiles to transform your living room, kitchen, or bathroom, our selection offers something for every taste and space.
          </p>
          <motion.button
            className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
