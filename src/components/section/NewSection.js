'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Elegant Dinner Plate', price: '$24.99', image: '/assets/tableware/coffee-table.jpg' },
  { id: 2, name: 'Modern Cutlery Set', price: '$39.99', image: '/assets/tableware/dining-set.jpg' },
  { id: 3, name: 'Crystal Wine Glass', price: '$19.99', image: '/assets/tableware/tableware1.jpg' },
  { id: 4, name: 'Ceramic Serving Bowl', price: '$34.99', image: '/assets/tableware/dining-set1.jpg' },
]

export default function AnimatedProductGrid() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8 mt-5">
     <h1 class="text-6xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Tableware's</h1>
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
          <h2 className="text-2xl font-bold mb-4">Our Table-ware Collection</h2>
          <p className="text-gray-700 mb-4">
            Discover our exquisite range of table-ware, designed to elevate your dining experience. From elegant dinner plates to modern cutlery sets, our collection combines style and functionality to bring sophistication to your table.
          </p>
          <p className="text-gray-700 mb-4">
            Each piece is crafted with attention to detail, using high-quality materials that ensure durability and timeless beauty. Whether you're hosting a formal dinner party or enjoying a casual meal with family, our table-ware will impress your guests and enhance your culinary presentations.
          </p>
          <motion.button
            className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           <a  href="/lucerno-porcelain-collection"> Explore Now</a> 
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}