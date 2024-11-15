import Image from "next/image"
import { Plus } from 'lucide-react'
import { BiChevronLeft } from 'react-icons/bi';

export default function Component() {
  const tiles = [
    {
      name: "Alabaster Natural-N",
      image: "/assets/home-page-img/prod1.jpg",
      specs: "Glazed Vitrified Tiles,800X1600 mm"
    },
    {
      name: "Aquatic Ocean-N",
      image: "/assets/home-page-img/prod2.jpg",
      specs: "Glazed Vitrified Tiles,800X1600 mm"
    },
    {
      name: "Bahia Silver Infinite-N",
      image: "/assets/home-page-img/prod3.jpg",
      specs: "Glazed Vitrified Tiles,800X1600 mm"
    },
    {
      name: "Baxter Silver (C)-N",
      image: "/assets/home-page-img/prod1.jpg",
      specs: "Glazed Vitrified Tiles,800X1600 mm"
    },
    {
      name: "Bayona Sand-N",
      image: "/assets/home-page-img/prod2.jpg",
      specs: "Glazed Vitrified Tiles,800X1600 mm"
    },
    {
      name: "Bianco Venato Infinite-N",
      image: "/assets/home-page-img/prod3.jpg",
      specs: "Glazed Vitrified Tiles,800X1600 mm"
    },
    {
      name: "Calacatta Imperial Gold-N",
      image: "/assets/home-page-img/prod1.jpg",
      specs: "Glazed Vitrified Tiles,800X1600 mm"
    },
    {
      name: "Cambria Grey-N",
      image: "/assets/home-page-img/prod2.jpg",
      specs: "Glazed Vitrified Tiles,800X1600 mm"
    }
  ]

  return (
    <div className="w-full px-4 py-8 md:px-6 lg:px-8 container mx-auto">
      <p className="flex items-center">
        <span className="text-sm text-orange-500">Home</span>
        <BiChevronLeft className="w-5 h-5 ml-2" />
        <span className="text-sm text-gray-600">Products</span>
      </p>
      <h2 className="text-5xl mt-5 text-gray-600">Products</h2>
      <div className="flex items-center justify-center mb-8 text-gray-800">
        <div className="h-[1px] w-12 bg-gray-300"></div>
        <span className="mx-4 text-lg font-medium">800 X 1600 mm</span>
        <div className="h-[1px] w-12 bg-gray-300"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.map((tile, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative aspect-[1.6] w-full mb-3 bg-gray-100">
              <Image
                src={tile.image}
                alt={tile.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-gray-900">{tile.name}</h3>
              <p className="text-sm text-gray-500">{tile.specs}</p>
              <button className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
                <Plus className="w-4 h-4 mr-1" />
                Add to Catalog
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}