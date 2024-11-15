import Image from "next/image"
import { ArrowRight } from 'lucide-react'

export default function Store() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find a Store near you</h1>
        <p className="text-gray-600 mb-8">
          The One - Stop destination flaunts a wide range of models that adorn your wall, bedeck your floor and beautify your interiors with much élan.
        </p>
        <button className="bg-white text-dark border bounded py-3 px-6  w-full md:w-auto">
          <a href="/products" className="flex items-center justify-center"> VIEW STORES
            <ArrowRight className="ml-2 h-5 w-5" /></a>
        </button>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/assets/home-page-img/store.jpg"
          alt="NITCO store display"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  )
}