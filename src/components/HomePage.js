import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react'

const HomePage = () => {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const router = useRouter()

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
    { id: 1, name: 'Elegant Dining Set', price: 299.99, image: '/assets/dining-set.jpg', rating: 4.5 },
    { id: 2, name: 'Modern Floor Lamp', price: 149.99, image: '/assets/floor-lamp.jpg', rating: 4.2 },
    { id: 3, name: 'Handcrafted Vase', price: 79.99, image: '/assets/vase.jpg', rating: 4.8 },
    { id: 4, name: 'Luxurious Throw Pillow', price: 39.99, image: '/assets/throw-pillow.jpg', rating: 4.3 },
    { id: 5, name: 'Artisan Coffee Table', price: 399.99, image: '/assets/dining-set.jpg', rating: 4.7 },
    { id: 6, name: 'Bohemian Area Rug', price: 199.99, image: '/assets/floor-lamp.jpg', rating: 4.6 },
    { id: 7, name: 'Minimalist Wall Clock', price: 59.99, image: '/assets/throw-pillow.jpg', rating: 4.4 },
    { id: 8, name: 'Ceramic Planter Set', price: 89.99, image: '/assets/vase.jpg', rating: 4.1 },
    { id: 9, name: 'Marble Cheese Board', price: 69.99, image: '/assets/coffee-table.jpg', rating: 4.9 },
  ]

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

  const MotionImage = motion(Image)

  return (
    <>
      <Head>
        <title>Lucerno - Elevate Your Space | Premium Home Decor</title>
        <meta name="description" content="Discover exquisite home decor at Lucerno. Elevate your living space with our premium collection." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${categories[currentCategory].image})` }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 text-center text-white space-y-8 px-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image src="/assets/logo.png" alt="Lucerno Logo" width={200} height={67} />
              </motion.div>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Elevate Your Space with Lucerno
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-xl md:text-2xl font-light"
              >
                Discover premium home decor that transforms your living space
              </motion.p>
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collections
              </motion.button>
            </div>
          </section>

          {/* Category Showcase */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-center mb-12"
              >
                Our Collections
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(category.pageUrl)}
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <Image
                        src={category.image}
                        alt={category.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Showcase */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-center mb-12"
              >
                Featured Products
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
                          Order Now
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
          </section>

          {/* Newsletter Section */}
          <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold mb-4"
              >
                Stay Inspired
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                Subscribe to our newsletter for exclusive offers and design inspiration
              </motion.p>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-md mx-auto flex"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <motion.button
                  type="submit"
                  className="bg-white text-gray-900 px-6 py-2 rounded-r-md font-semibold hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                <Image src="/assets/logo.png" alt="Lucerno Logo" width={100} height={33} />
                <p className="mt-2 text-sm text-gray-400">Elevating spaces since 2023</p>
              </div>
              <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <nav className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.a
                      key={index}
                      href={category.pageUrl}
                      className="block text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {category.name}
                    </motion.a>
                  ))}
                </nav>
              </div>
              <div className="w-full md:w-1/3 text-center md:text-right">
                <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                <div className="flex justify-center md:justify-end space-x-4">
                  {['facebook', 'instagram', 'twitter', 'pinterest'].map((social) => (
                    <motion.a
                      key={social}
                      href={`https://${social}.com/lucerno`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-400">
              <p>&copy; 2023 Lucerno. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default HomePage