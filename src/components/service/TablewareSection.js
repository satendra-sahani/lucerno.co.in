import React from 'react'
import Image from 'next/image'

const TablewareSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary">
    <div className="container mx-auto">
    <h1 class="text-6xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Tableware</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/3 bg-background rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-2">Elegant Dining</h3>
          <p className="text-sm text-muted-foreground mb-4">Set the perfect table for any occasion</p>
          <p className="mb-4">Our tableware collection combines functionality with stunning design. From everyday meals to special gatherings, our pieces will elevate your dining experience.</p>
          <button variant="outline">Explore Tableware</button>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
          <Image
            src="/assets/tableware/tableware1.jpg"
            alt="Tableware 1"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/assets/tableware/tableware2.jpg"
            alt="Tableware 2"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/assets/tableware/tableware5.jpg"
            alt="Tableware 3"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/assets/tableware/tableware4.jpg"
            alt="Tableware 4"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default TablewareSection