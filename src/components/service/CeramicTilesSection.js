import React from 'react'
import Image from 'next/image'

const CeramicTilesSection = () => {

    const img=[
        {
            img:"/assets/ceramic-tiles/classic-white-tile.jpg ",
            title:"Ceramic Tiles",
        },
        {
            img:"/assets/ceramic-tiles/granite-look-tile.jpg ",
            title:"Ceramic Tiles",
        },
        {
            img:"/assets/ceramic-tiles/classic-white-tile.jpg ",
            title:"Ceramic Tiles",
        },
        {
            img:"/assets/ceramic-tiles/wooden-texture-tile.jpg ",
            title:"Ceramic Tiles",
        },
        {
            img:"/assets/ceramic-tiles/wooden-texture-tile.jpg ",
            title:"Ceramic Tiles",
        },
        {
            img:"/assets/ceramic-tiles/granite-look-tile.jpg ",
            title:"Ceramic Tiles",
        },
        {
            img:"/assets/ceramic-tiles/wooden-texture-tile.jpg ",
            title:"Ceramic Tiles",
        },
        {
            img:"/assets/ceramic-tiles/classic-white-tile.jpg ",
            title:"Ceramic Tiles",
        },
        {
            img:"/assets/ceramic-tiles/classic-white-tile.jpg ",
            title:"Ceramic Tiles",
        },
    ]
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
    <div className="container mx-auto">
    <h1 class="text-6xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Ceramic Tiles</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold">Durable Beauty for Your Floors and Walls</h3>
          <p className="text-muted-foreground">
            Our ceramic tiles offer the perfect blend of durability and style. With a wide range of colors, patterns, and textures, you'll find the ideal tiles to complement any room in your home.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Easy to clean and maintain</li>
            <li>Resistant to stains and scratches</li>
            <li>Suitable for both indoor and outdoor use</li>
            <li>Eco-friendly and long-lasting</li>
          </ul>
          <button>View Tile Collection</button>
        </div>
        <div className="lg:w-1/2">
          <div className="grid grid-cols-3 gap-2">
            {img.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={item.title}
                width={200}
                height={200}
                className="rounded-md shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CeramicTilesSection