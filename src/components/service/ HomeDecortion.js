import React from 'react'
import Image from 'next/image'

const  HomeDecortion = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
    <div className="container mx-auto">
    <h1 class="text-6xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Home Decoration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/assets/home-decor/home-bg.jpg"
            alt="Home Decor"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Transform Your Living Space</h3>
          <p className="text-muted-foreground">
            Our exquisite home decor collection brings elegance and charm to any room. From stylish wall art to cozy throw pillows, we have everything you need to create a personalized and inviting atmosphere.
          </p>
          <button>Shop Home Decor</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default  HomeDecortion