'use client'

import { ChevronRight, ZoomIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Component() {

  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div className="screen-[400px] bg-white p-4 md:p-8">
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Link
          href="/"
          className="text-orange-500 transition-colors hover:text-orange-600"
        >
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href="/Product"
          className="text-orange-500 transition-colors hover:text-orange-600"
        >
          Product
        </Link>

        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-600">507 Marbannova</span>
      </nav>

      <motion.h1
        className="mb-8 text-4xl font-light text-gray-800 md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        507 Marbannova
      </motion.h1>

      <motion.div
        className="group relative aspect-[2/1] w-full overflow-hidden border border-gray-500 rounded-lg bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="/assets/catalog/catalog2.jpg"
          alt="507 Marbannova Porcelain Surface"
          width={1600}
          height={800}
          className={`h-full w-full object-cover transition-transform duration-500 ease-out
            ${isZoomed ? 'scale-150' : 'scale-100 group-hover:scale-105'}`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        <button
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 shadow-lg transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronRight className="h-6 w-6 rotate-180" />
        </button>

        <button
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 shadow-lg transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 opacity-0 shadow-lg transition-opacity duration-300 hover:bg-white group-hover:opacity-100"
          aria-label={isZoomed ? "Zoom out" : "Zoom in"}
        >
          <ZoomIn className="h-6 w-6" />
        </button>
      </motion.div>
    </div>
  )
}