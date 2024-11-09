import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
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
  return (
    <>
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
             <motion.a
               href=""
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors"
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
             >
              <FaInstagram className='h-8 w-8 text-pink-500' />
             </motion.a>
             <motion.a
               href=""
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors"
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
             >
              <FaTwitter className='h-8 w-8 text-green-500'/>
             </motion.a>
             <motion.a
               href=""
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors"
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.9 }}
             >
              <FaYoutube className='h-8 w-8 text-white'/>
             </motion.a>
         </div>
       </div>
     </div>
     <div className="mt-8 text-center text-sm text-gray-400">
       <p>&copy; 2023 Lucerno. All rights reserved.</p>
     </div>
   </div>
 </footer>
 </>
  )
}

export default Footer