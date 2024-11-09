import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CeramicTileSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const ceramicTiles = [
    { id: 1, name: 'Italian Marble Tile', price: 45.99, image: '/assets/ceramic-tiles/marble-tile.jpg', rating: 4.7 },
    { id: 2, name: 'Rustic Clay Tile', price: 29.99, image: '/assets/ceramic-tiles/clay-tile.jpg', rating: 4.5 },
    { id: 3, name: 'Polished Granite Tile', price: 55.99, image: '/assets/ceramic-tiles/granite-tile.jpg', rating: 4.8 },
    { id: 4, name: 'Patterned Ceramic Tile', price: 34.99, image: '/assets/ceramic-tiles/patterned-tile.jpg', rating: 4.6 },
    { id: 5, name: 'Classic Subway Tile', price: 19.99, image: '/assets/ceramic-tiles/subway-tile.jpg', rating: 4.4 },
    { id: 3, name: 'Polished Granite Tile', price: 55.99, image: '/assets/ceramic-tiles/granite-tile.jpg', rating: 4.8 },
    { id: 4, name: 'Patterned Ceramic Tile', price: 34.99, image: '/assets/ceramic-tiles/patterned-tile.jpg', rating: 4.6 },
    { id: 5, name: 'Classic Subway Tile', price: 19.99, image: '/assets/ceramic-tiles/subway-tile.jpg', rating: 4.4 },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Ceramic Tiles
        </motion.h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ceramicTiles.map((tile, index) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredProduct(tile.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <div className="relative w-full h-60 overflow-hidden">
                <motion.img 
                  src={tile.image}
                  alt={tile.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredProduct === tile.id ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === tile.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <motion.button
                    onClick={() => alert(`Order Now: ${tile.name}`)}
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href='/contact-us'>Order Now</a>
                  </motion.button>
                </motion.div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{tile.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 font-bold">${tile.price.toFixed(2)}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">⭐</span>
                    <span className="text-sm text-gray-600">{tile.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full text-center mt-8">
        <button className="bg-gray-900 text-white py-2 px-3 rounded"><a href='/ceramic-tiles'>Explore Now</a></button>
      </div>
    </section>
  );
};

export default CeramicTileSection;
