'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function SimilarProduct() {
  const similarModels = [
    { id: "506", name: "506 Mirabel", image: "/assets/img/simiral1.jpg" },
    { id: "505", name: "505 Archetta", image: "/assets/img/simiral2.jpg" },
    { id: "531", name: "531 Libretta", image: "/assets/img/simiral3.jpg" }
  ]

  const edges = [
    { name: "Bevel", image: "/assets/img/edge-2-l.png" },
    { name: "Full Bevel", image: "/assets/img/edge-5-l.png" },
    { name: "Semi Bullnose", image: "/assets/img/edge-7-l.png" },
    { name: "Miter", image: "/assets/img/edge-11-l.png" }
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8 mt-5">
      <div className="grid gap-12 lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-medium text-gray-900">Care and Maintenance</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <span>Non-Porous</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <span>Clean with regular detergents</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <span>No sealing or waxing!</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <span>Heat resistant</span>
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-medium text-gray-900">Technical Information</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <span>Thickness: 12 mm</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <span>Finishes: Silk</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <span>Sizes: 160 cm × 320 cm</span>
            </li>
          </ul>
        </motion.section>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 space-y-6"
      >
        <h2 className="text-2xl font-medium text-gray-900">Similar Models</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {similarModels.map((model) => (
            <Link
              key={model.id}
              href={`/catalog/porcelain-surfaces/${model.id}`}
              className="group relative overflow-hidden "
            >
              <Image
                src={model.image}
                alt={model.name}
                width={600}
                height={300}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <p className="mt-3">{model.name}</p>
            </Link>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 space-y-6"
      >
        <h2 className="text-2xl font-medium text-gray-900">Available Edges</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {edges.map((edge) => (
            <div key={edge.name} className="space-y-2 text-center">
              <div className="mx-auto h-24 w-48">
                <Image
                  src={edge.image}
                  alt={`${edge.name} edge profile`}
                  width={200}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">{edge.name}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}