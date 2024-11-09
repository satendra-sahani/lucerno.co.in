'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Star } from 'lucide-react'

export default function HomeDecoration() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const products1 = [
    { id: 1, name: "Elegant Vase", price: "$49.99", rating: 4.5, image: "/assets/home-decor/home-dec1.jpg" },
    { id: 2, name: "Modern Wall Clock", price: "$79.99", rating: 4.8, image: "/assets/home-decor/home-deco2.jpg" },
    { id: 3, name: "Cozy Throw Pillow", price: "$29.99", rating: 4.2, image: "/assets/home-decor/home-deco3.jpg" },
  ]

  const products2 = [
    { id: 1, name: "Elegant Vase", price: "$49.99", rating: 4.5, image: "/assets/home-decor/home-deco4.jpg" },
    { id: 2, name: "Modern Wall Clock", price: "$79.99", rating: 4.8, image: "/assets/home-decor/home-deco5.jpg" },
    { id: 3, name: "Cozy Throw Pillow", price: "$29.99", rating: 4.2, image: "/assets/home-decor/home-deco6.jpg" },
    { id: 1, name: "Elegant Vase", price: "$49.99", rating: 4.5, image: "/assets/home-decor/home-deco7.jpg" },
    { id: 2, name: "Modern Wall Clock", price: "$79.99", rating: 4.8, image: "/assets/home-decor/home-deco8.jpg" },
    { id: 3, name: "Cozy Throw Pillow", price: "$29.99", rating: 4.2, image: "/assets/home-decor/home-deco9.jpg" },
    { id: 1, name: "Elegant Vase", price: "$49.99", rating: 4.5, image: "/assets/home-decor/home-deco10.jpg" },
    { id: 2, name: "Modern Wall Clock", price: "$79.99", rating: 4.8, image: "/assets/home-decor/home-deco11.jpg" },
    { id: 3, name: "Cozy Throw Pillow", price: "$29.99", rating: 4.2, image: "/assets/home-decor/home-deco12.jpg" },
  ]

  const products3 = [
    { id: 1, name: "Elegant Vase", price: "$49.99", rating: 4.5, image: "/assets/home-decor/home-deco13.jpg" },
    { id: 2, name: "Modern Wall Clock", price: "$79.99", rating: 4.8, image: "/assets/home-decor/home-deco14.jpg" },
    { id: 3, name: "Cozy Throw Pillow", price: "$29.99", rating: 4.2, image: "/assets/home-decor/home-deco15.jpg" },
    { id: 1, name: "Elegant Vase", price: "$49.99", rating: 4.5, image: "/assets/home-decor/home-deco16.jpg" },
    { id: 2, name: "Modern Wall Clock", price: "$79.99", rating: 4.8, image: "/assets/home-decor/home-deco17.jpg" },
    { id: 3, name: "Cozy Throw Pillow", price: "$29.99", rating: 4.2, image: "/assets/home-decor/home-deco18.jpg" },
  ]
  const [bgIndex, setBgIndex] = useState(0)

  const backgrounds = [
    "/assets/home-decor/home2.jpg",
    "/assets/home-decor/home4.jpg",
    "/assets/home-decor/home5.jpg"
  ]

  // Update background every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [backgrounds.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {backgrounds.map((bg, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg})`,
              zIndex: bgIndex === index ? 10 : 0,
            }}
            initial={{
              opacity: 0,
              scale: 1.1,
              x: bgIndex === index ? -50 : 50, // Slide effect
            }}
            animate={{
              opacity: bgIndex === index ? 1 : 0,
              scale: bgIndex === index ? 1 : 1.1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="text-center relative z-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transform Your Space
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Discover unique home decor pieces that reflect your style
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className='w-full text-center'
          >
            <a href='/contact-us'>
              <button size="lg" className="bg-gray-900 text-white mx-auto  flex ites-center gap-2 text-gray-900 hover:bg-gray-900 px-6 py-3 rounded">
                <span>Shop Now </span> <ChevronRight className="ml-2 h-4 w-4 mt-1 " />
              </button>
            </a>
          </motion.div>
        </div>
      </motion.section>


      {/* Product Sections */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Products</h2>

        {/* Product Section 1 - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products1.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 p-4 rounded-lg"
            >
              <div className="p-4 text-white">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg">{product.price}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <button className="w-full text-white border border-white px-2 py-2 rounded"><a href='/contact-us'>Add to Cart</a></button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Section 2 - Horizontal Scroll */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Trending Now</h3>

          <div className="flex overflow-x-auto space-x-4 pb-4 custom-scrollbar">
            {products2.map((product) => (
              <motion.div
                key={product.id}
                className="flex-none w-64 bg-gray-800 p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
                  <h3 className="text-lg font-semibold mb-2 text-white">{product.name}</h3>
                  <p className="text-sm mb-2 text-white">{product.price}</p>
                  <button className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600"><a href='/contact-us'>Order Now</a></button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Product Section 3 - Interactive Hover */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Discover More</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products3.map((product) => (
              <motion.div
                key={product.id}
                className="relative h-80 rounded overflow-hidden"
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
                    <p className="mb-4 text-white">{product.price}</p>
                    <button variant="outline " className='text-white border border-white px-2 py-2 rounded'><a href='/contact-us'>Order Now</a></button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
