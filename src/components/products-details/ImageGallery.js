
import React, { useState } from 'react';

const images = [
  { src: '/assets/catalog/catalog2.jpg', alt: 'Image 1' },
  { src: '/assets/catalog/catalog4.jpg', alt: 'Image 2' },
  { src: '/assets/catalog/catalog8.jpg', alt: 'Image 3' },
  { src: '/assets/catalog/catalog10.jpg', alt: 'Image 4' },
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => handleImageClick(index)}
          className={`border-2 w-[300px] h-[300px] overflow-hidden p-1 transition-all duration-300 cursor-pointer ${index === activeIndex ? 'border-red-500' : 'border-black'
            }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
