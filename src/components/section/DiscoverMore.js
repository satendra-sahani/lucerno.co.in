'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

const products = [
  { id: 1, name: 'Elegant Vase', price: '$49.99', image: '/assets/home-decor/home-dec1.jpg' },
  { id: 2, name: 'Decorative Pillow', price: '$29.99', image: '/assets/home-decor/home-deco2.jpg' },
  { id: 3, name: 'Wall Clock', price: '$39.99', image: '/assets/home-decor/home-deco3.jpg' },
  { id: 4, name: 'Scented Candle', price: '$19.99', image: '/assets/home-decor/home-deco4.jpg' },
]

export default function HomeDecorProductGrid() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8 mt-5">
       <h1 class="text-6xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Home Decoration</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
        <motion.div 
          className="lg:col-span-1 bg-background p-6 rounded-lg shadow-md order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">Elevate Your Space</h2>
          <p className="text-muted-foreground mb-4">
            Transform your home with our exquisite collection of home decor items. From elegant vases to stylish wall clocks, each piece is carefully curated to add a touch of sophistication and personality to your living spaces.
          </p>
          <p className="text-muted-foreground mb-6">
            Our products blend form and function, ensuring that your home not only looks beautiful but also reflects your unique style. Whether you're looking for a statement piece or subtle accents, our collection has something for every taste and interior design theme.
          </p>
          <motion.button
            className="bg-gray-700 text-white px-6 py-3 rounded-full transition-colors duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           
           <a href='/lucerno-porcelain-collection'> <span>Explore Now</span></a>
          </motion.button>
        </motion.div>
        <motion.div 
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <motion.div 
                className="p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === product.id ? 1 : 0.8 }}
              >
                <h3 className="text-lg font-semibold text-card-foreground">{product.name}</h3>
                <p className="text-muted-foreground">{product.price}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}