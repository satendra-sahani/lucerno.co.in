'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
// import Image from 'next/image'
import { Menu, X, ChevronDown, ShoppingCart, Heart, Search } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '/' },
  // { name: 'Products', href: '/products' },
  {
    name: 'Dining',
    dropdown: [
      { name: 'dining1', href: '/lucerno-porcelain-collection' },
      { name: 'dining2', href: '/lucerno-porcelain-collection' },
      { name: 'dining3', href: '/lucerno-porcelain-collection' },
    ]
  },
  {
    name: 'Decor',
    dropdown: [
      { name: 'decor 1', href: '/care-maintenance' },
      { name: 'decor 2', href: '/warranty' },
    ]
  },
  {
    name: 'Terrazzo & Concrete',
    dropdown: [
      { name: 'Terrazzo', href: '/care-maintenance' },
      { name: 'Concrete', href: '/warranty' },
    ]
  },
  {
    name: 'Brand',
    dropdown: [
      { name: 'About', href: '/about-us' },
      { name: 'Craftmnship', href: '/craftmanship' },
    ]
  },
  // { name: 'About Us', href: "/about-us" },
  // { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact-us' },
  // { name: 'Login', href: '/login' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }
  const [isSearchOpen, setIsSearchOpen] = useState(false)



  return (
    <header style={{background:"black!important"}} className={`sticky top-0 z-50 bg-gradient-to-r from-cyan-700 to-gray-900  border-b border-gray-200 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''} bg-black`}>
      <div className="container mx-auto px-4 bg-black">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
          {/* <img src="/Icon.png" className="w-12 h-auto" alt="Icon Logo" /> */}
          <img src="/assets/logo.png" className="w-40 h-auto" alt="White Logo" />
           
          </Link>
          <nav className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.href ? (
                  <Link href={item.href} className="text-white hover:text-orange-500 transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleDropdown(index)}
                    className="text-gray-600 hover:text-orange-700 transition-colors flex items-center space-x-1"
                  >
                    <span className='text-white'>{item.name}</span>
                    <ChevronDown className="w-4 h-4 text-white" />
                  </button>
                )}

                {item.dropdown && (
                  <AnimatePresence>
                    {openDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-[17rem] bg-white rounded-md shadow-lg z-10"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>
          {/* <div className="relative flex gap-2 items-center">
            <Heart className="w-6 h-6  cursor-pointer hidden lg:flex text-white" />
            <div className="relative hidden lg:flex">
              <a href='/favorites'><ShoppingCart className="w-6 h-6 text-white cursor-pointer" /></a>
              <div className="absolute -top-2 -right-2 h-5 w-5 bg-orange-700 text-white rounded-full flex items-center justify-center text-xs">
                0
              </div>
            </div>
            <button
              onClick={handleSearchClick}
              className="w-6 h-6 text-gray-600 flex items-center justify-center ml-2 cursor-pointer hidden lg:flex"
            >
              <Search className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: isSearchOpen ? 1 : 0, width: isSearchOpen ? '200px' : 0 }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-3 text-gray-600 border border-gray-300 rounded-md focus:outline-none"
              />
            </motion.div>
          </div> */}
          <div className='flex gap-4 items-center'>
            {/* <div className="relative lg:hidden">
              <a href='/favorites'><ShoppingCart className="w-6 h-6 text-white cursor-pointer" /></a>
              <div className="absolute -top-2 -right-2 h-5 w-5 bg-orange-700 text-white rounded-full flex items-center justify-center text-xs">
                0
              </div>
            </div> */}
            <button
              className="lg:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-r from-cyan-700 to-gray-900  text-white"
            >
              <nav className="py-4">
                {menuItems.map((item, index) => (
                  <div key={item.name} className="mb-2">
                    {!item.href && (
                      <>
                        <button
                          onClick={() => handleDropdown(index)}
                          className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-gray-900"
                        >
                          <span className='text-white'>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform text-white ${openDropdown === index ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === index && item.dropdown && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block py-2 text-white hover:text-gray-900"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                    {item.href && (
                      <Link href={item.href} className="block py-2 text-white hover:text-gray-900">
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}