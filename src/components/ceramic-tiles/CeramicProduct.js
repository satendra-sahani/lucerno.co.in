'use client'

import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 1,
    title: 'Ceramic Tiles',
    description: 'High-quality sound with active noise cancellation.',
    image: '/assets/ceramic-tiles/granite-tile.jpg'
  },
  {
    id: 2,
    title: 'Ceramic Tiles',
    description: 'Track your fitness and stay connected on the go.',
    image: '/assets/ceramic-tiles/marble-tile.jpg'
  },
  {
    id: 3,
    title: 'Ceramic Tiles',
    description: 'Fast-charging power bank for all your devices.',
    image: '/assets/ceramic-tiles/patterned-tile.jpg'
  },
  {
    id: 4,
    title: 'Ceramic Tiles',
    description: 'Immersive 360° sound for your outdoor adventures.',
    image: '/assets/ceramic-tiles/patterned-tile2.jpg'
  },
  {
    id: 5,
    title: 'Ceramic Tiles',
    description: 'Ergonomic design for improved posture and comfort.',
    image: '/assets/ceramic-tiles/subway-tile.jpg'
  },
  {
    id: 6,
    title: 'Ceramic Tiles',
    description: 'Precision tracking with long battery life.',
    image: '/assets/ceramic-tiles/ubway-tile.jpg'
  }
]

const products1 = [
    {
      id: 1,
      title: 'Ceramic Tiles',
      image: '/assets/ceramic-tiles/granite-tile.jpg'
    },
    {
      id: 2,
      title: 'Ceramic Tiles',
      image: '/assets/ceramic-tiles/marble-tile.jpg'
    },
    {
      id: 3,
      title: 'Ceramic Tiles',
      image: '/assets/ceramic-tiles/patterned-tile.jpg'
    },
    {
      id: 4,
      title: 'Ceramic Tiles',
      image: '/assets/ceramic-tiles/patterned-tile2.jpg'
    },
    {
      id: 5,
      title: 'Ceramic Tiles',
      image: '/assets/ceramic-tiles/subway-tile.jpg'
    },
    {
      id: 6,
      title: 'Ceramic Tiles',
      image: '/assets/ceramic-tiles/ubway-tile.jpg'
    }
  ]

export default function CeramicProduct() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="overflow-hidden bg-white shadow-md rounded-lg">
              <div className="p-4">
                <div className="aspect-square relative mb-4">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="object-cover rounded-md w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              </div>
              <div className="p-4 border-t">
              <a href='/contact-us'>
              <button className="w-full flex items-center justify-center bg-gray-900 text-white py-2 px-2 rounded-md hover:bg-gray-900 transition-colors duration-200">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </button>
              </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    {/* new section */}

    
    <div className="min-h-screen bg-gray-900  p-8">
    <h1 className="text-3xl font-bold text-center mb-8 text-white">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products1.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group overflow-hidden bg-white border-2 border-white shadow-md rounded-lg"
          >
            <div className="relative aspect-square overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-lg">
                <h2 className="text-xl font-semibold text-white mb-2">{product.title}</h2>
                <button className="mt-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-900 transition-colors duration-200">
                 <a href='/contact-us'> Order Now</a>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  )
}
