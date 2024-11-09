import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

const HomePage = () => {
  const [currentCategory, setCurrentCategory] = useState(0)

  const router = useRouter()

  const categories = [
    {
      name: 'Tableware',
      image: '/assets/home-decor/home-bg.jpg',
      pageUrl: '/tableware',
      description: 'Elegant dining essentials for every occasion'
    },
    {
      name: 'Home Decor',
      image: '/assets/home-decor/home2.jpg',
      pageUrl: '/home-decor',
      description: 'Transform your space with our unique decor pieces'
    },
    {
      name: 'Ceramic Tiles',
      image: '/assets/ceramic-tiles/ceramic-tiles1.jpg',
      pageUrl: '/ceramic-tiles',
      description: 'Durable and stylish tiles for floors and walls'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % categories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])



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
                <a href='/contact-us'>  Explore Collections</a>
              </motion.button>
            </div>
          </section>

        </main>



      </div>
    </>
  )
}

export default HomePage