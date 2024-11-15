'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Mail, Printer } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import EmailModalProps from './EmailModalProps'

export default function Favorites() {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)

  const handlePrint = () => {
    window.print()
  }



  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  return (
    <div className=" bg-white p-4 md:p-6 lg:p-8 max-h-screen">

      <nav className="mb-6 flex items-center gap-2 text-sm">
        <Link href="/" className="text-orange-500 hover:text-orange-600 transition-colors">
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">Favorites</span>
      </nav>

      <div className="mb-8 space-y-4">
        <div className="flex items-start justify-between">
          <motion.div layout className="space-y-4">
            <button
              onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
              className="flex items-center gap-2 text-3xl font-light text-gray-800 hover:text-gray-600 transition-colors"
            >
              Favorites
              <ChevronDown className={`w-6 h-6 transition-transform ${isFavoritesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isFavoritesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="pl-4"
                >
                  <button
                    onClick={() => setIsModelOpen(!isModelOpen)}
                    className="flex items-center gap-2 text-xl text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Favorites Model
                    <ChevronDown className={`w-5 h-5 transition-transform ${isModelOpen ? 'rotate-180' : ''}`} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="flex items-center gap-4 print:hidden">
            <button
              onClick={handlePrint}
              className="text-orange-500 hover:text-orange-600 transition-colors"
              aria-label="Print page"
            >
              <Printer className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsEmailModalOpen(true)}
              className="text-orange-500 hover:text-orange-600 transition-colors"
              aria-label="Share via email"
            >
              <Mail className="w-6 h-6" />
            </button>

            <EmailModalProps
              isOpen={isEmailModalOpen}
              setIsEmailModalOpen={setIsEmailModalOpen}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative"
        >
          <Link href="/products/507-marbannova" className="block">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/assets/img/simiral2.jpg"
                alt="507 Marbannova"
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
              507 Marbannova
            </h3>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}