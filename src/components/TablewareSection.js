import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const TablewareSection = () => {

    const [hoveredProduct, setHoveredProduct] = useState(null)
    const [currentCategory, setCurrentCategory] = useState(0)

    const categories = [
        {
          name: 'Tableware',
          image: '/assets/home-bg.jpg',
          pageUrl: '/tableware',
          description: 'Elegant dining essentials for every occasion'
        },
        {
          name: 'Home Decor',
          image: '/assets/home2.jpg',
          pageUrl: '/home-decor',
          description: 'Transform your space with our unique decor pieces'
        },
        {
          name: 'Ceramic Tiles',
          image: '/assets/ceramic-tiles1.jpg',
          pageUrl: '/ceramic-tiles',
          description: 'Durable and stylish tiles for floors and walls'
        }
      ]

    const products = [
        { id: 1, name: 'Elegant Dining Set', price: 299.99, image: '/assets/tableware/dining-set.jpg', rating: 4.5 },
        { id: 2, name: 'Modern Floor Lamp', price: 149.99, image: '/assets/tableware/tableware1.jpg', rating: 4.2 },
        { id: 3, name: 'Handcrafted Vase', price: 79.99, image: '/assets/tableware/tableware2.jpg', rating: 4.8 },
        { id: 4, name: 'Luxurious Throw Pillow', price: 39.99, image: '/assets/tableware/tableware3.jpg', rating: 4.3 },
        { id: 5, name: 'Artisan Coffee Table', price: 399.99, image: '/assets/tableware/tableware4.jpg', rating: 4.7 },
        { id: 6, name: 'Bohemian Area Rug', price: 199.99, image: '/assets/tableware/tableware5.jpg', rating: 4.6 },
        { id: 7, name: 'Minimalist Wall Clock', price: 59.99, image: '/assets/tableware/tableware6.jpg', rating: 4.4 },
        { id: 8, name: 'Ceramic Planter Set', price: 89.99, image: '/assets/tableware/tableware7.jpg', rating: 4.1 },
        { id: 9, name: 'Marble Cheese Board', price: 69.99, image: '/assets/tableware/coffee-table.jpg', rating: 4.9 },
      ]
      const MotionImage = motion(Image)

    
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleOrderNow = (productId) => {
    console.log(`Ordering product ${productId}`)
    // Implement your order now logic here
  }
  return (
    <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-12"
      >
      Tableware's
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05, y: -5 }}
            onHoverStart={() => setHoveredProduct(product.id)}
            onHoverEnd={() => setHoveredProduct(null)}
          >
            <div className="relative w-full h-0 pb-[75%] overflow-hidden mx-auto"> {/* Updated div class */}
              <MotionImage
                src={product.image}
                alt={product.name}
                width={500}
                height={300}
                initial={{ scale: 1 }}
                animate={{ scale: hoveredProduct === product.id ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <motion.button
                  onClick={() => handleOrderNow(product.id)}
                  className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                <a href='/contact-us'>  Order Now</a>
                </motion.button>
              </motion.div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 font-bold">${product.price.toFixed(2)}</p>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <div className='w-full text-center mt-5'>
        <button className='bg-gray-900 text-white px-2 py-3 rounded'>
       <a href='/tableware'> Explore Now</a>
        </button>
      </div>
  </section>
  )
}

export default TablewareSection