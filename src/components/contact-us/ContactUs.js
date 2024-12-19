'use client'

import { motion } from 'framer-motion'

export default function ContactUs() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">

      <div Connect With Us
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597758464605-aa125b827c33?w=1200&q=80')] 
        bg-cover bg-center bg-no-repeat"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Send us your questions or feedback regarding your Lucerno experience
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </section>
  )
}