import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Star, Eye, Download } from 'lucide-react'
import Image from 'next/image';
import { catalog } from '../data/Products';

const Catalogue = () => {

  return (
    <div className="mt-5 container w-full mx-auto">
      <p className="flex items-center">
        <span className="text-sm text-orange-500">Home</span>
        <BiChevronLeft className="w-5 h-5 ml-2" />
        <span className="text-sm text-gray-600">Catalog</span>
      </p>
      <h2 className="text-5xl mt-5 text-gray-600">Catalog</h2>


      {catalog.map((item) => (
        <div key={item.id} className="mb-8">
          <div className="grid grid-cols-12 gap-4 group">
            <div className="col-span-12 md:col-span-8">
              <div className="relative h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={item.img1}
                  alt={`${item.title} - Main View`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="relative h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={item.img2}
                  alt={`${item.title} - Secondary View`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className="col-span-12 relative">
              <div className="absolute right-0 -bottom-2 flex gap-4 bg-white py-3 px-4  opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Star className="w-5 h-5 text-orange-500" />
                  <span className="text-sm whitespace-nowrap hover:text-orange-500">Add to Favorites</span>
                </button>
                <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Eye className="w-5 h-5 text-orange-500" />
                  <span className="text-sm whitespace-nowrap hover:text-orange-500">Visualizer</span>
                </button>
                <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Download className="w-5 h-5 text-orange-500" />
                  <span className="text-sm whitespace-nowrap hover:text-orange-500">Download</span>
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h3 className="text-lg font-semibold text-gray-900 px-2">
                {item.title}
              </h3>
            </div>
          </div>
        </div>
      ))}


    </div>
  );
};

export default Catalogue;
