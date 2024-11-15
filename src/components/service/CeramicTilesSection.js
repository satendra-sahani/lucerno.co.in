'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'



const ceramicTiles = [
  {
    id: 1,
    name: "Moroccan Mosaic",
    description: "Intricate patterns inspired by traditional Moroccan designs.",
    imageUrl: "/assets/ceramic-tiles/classic-white-tile.jpg",
    category: "Mosaic",
    price: "$12.99/sqft"
  },
  {
    id: 2,
    name: "Minimalist White",
    description: "Clean, simple white tiles for a modern look.",
    imageUrl: "/assets/ceramic-tiles/granite-look-tile.jpg",
    category: "Solid",
    price: "$8.99/sqft"
  },
  {
    id: 3,
    name: "Rustic Terracotta",
    description: "Warm, earthy tones perfect for a cozy atmosphere.",
    imageUrl: "/assets/ceramic-tiles/marble-finish-tile.jpg",
    category: "Terracotta",
    price: "$10.99/sqft"
  },
  {
    id: 4,
    name: "Blue Porcelain",
    description: "Elegant blue and white porcelain tiles with delicate patterns.",
    imageUrl: "/assets/ceramic-tiles/wooden-texture-tile.jpg",
    category: "Porcelain",
    price: "$14.99/sqft"
  },
  {
    id: 5,
    name: "Geometric Grey",
    description: "Modern geometric patterns in various shades of grey.",
    imageUrl: "/assets/ceramic-tiles/marble-finish-tile.jpg",
    category: "Patterned",
    price: "$11.99/sqft"
  },
  {
    id: 6,
    name: "Natural Stone",
    description: "Authentic stone tiles for a luxurious, natural look.",
    imageUrl: "/assets/ceramic-tiles/classic-white-tile.jpg",
    category: "Stone",
    price: "$16.99/sqft"
  }
]

export default function CeramicTiles() {

  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Exquisite Ceramic Tiles
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform your space with our stunning collection of ceramic tiles.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ceramicTiles.map((tile, index) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-0">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={tile.imageUrl}
                      alt={tile.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-white text-primary-foreground">
                      {tile.category}
                    </div>
                  </div>
                  <motion.div
                    className="p-4"
                    initial={{ opacity: 1, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold mb-2">{tile.name}</h3>
                    <p className="text-sm  mb-4">{tile.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">{tile.price}</span>
                      <button className="bg-primary text-primary-foreground px-4 py-2 border rounded-md  transition-colors">
                        <a href='/products'>  View Details</a>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}