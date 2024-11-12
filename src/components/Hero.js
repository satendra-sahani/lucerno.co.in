'use client'

import { useState } from 'react'
import Slider from 'react-slick'
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Import required CSS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const products = [
  {
    id: 1,
    category: "Home Decoration",
    title: "Modern Wall Art Collection",
    price: "From ₹999/piece",
    description: "Transform your space with elegant wall decor",
    image: "/assets/img/modern-wall-at-collection.jpg",
    offer: "Special Launch Offer",
    emi: "No Cost EMI from ₹167/month",
    discount: "30% OFF"
  },
  {
    id: 2,
    category: "Tableware",
    title: "Premium Dining Collection",
    price: "From ₹2499/set",
    description: "Luxury dining sets for your special moments",
    image: "/assets/img/premium-dining-collection.jpg",
    offer: "Festival Sale",
    emi: "No Cost EMI from ₹208/month",
    discount: "25% OFF"
  },
  {
    id: 3,
    category: "Ceramic Tiles",
    title: "Designer Floor Tiles",
    price: "From ₹89/sq.ft",
    description: "Premium quality tiles for modern homes",
    image: "/assets/img/designer-floor-tiles.jpg",
    offer: "Bulk Order Discount",
    emi: "No Cost EMI Available",
    discount: "20% OFF"
  }
]

function NextArrow(props) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  )
}
export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide ? 'bg-primary scale-125' : 'bg-gray-300'
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  }

  return (
    <div className="relative w-full mx-auto">
      <Slider {...settings} className="product-slider">
        {products.map((product) => (
          <div key={product.id} className="outline-none">
            <div className="relative h-[200px] md:h-[500px] bg-gradient-to-r from-cyan-700 to-gray-900">
              <div className="container mx-auto px-4 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                  <div className="text-white space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-primary-foreground text-primary text-sm mb-4">
                        {product.offer}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h2>
                      <p className="text-xl md:text-2xl mb-2">{product.price}</p>
                      <p className="text-lg opacity-90">{product.description}</p>
                      <p className="text-sm mt-4">{product.emi}</p>
                    </motion.div>
                    <div className="flex gap-4 ">
                      <button size="lg" className="bg-white text-gray-900 flex gap-2 items-center px-2 py-2 rounded hover:bg-white/90">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        <span> Shop Now</span>
                      </button>
                      <button size="lg" variant="outline" className="bg-transparent flex gap-2 items-center border-white text-white hover:bg-white/20">
                        <Heart className="mr-2 h-5 w-5" />
                        <span> Save</span>
                      </button>
                    </div>
                  </div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-red-500 text-white rounded-full px-2 py-1">{product.discount}</div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-[300px] md:h-[400px] bg-cover rounded shadow-xl bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .product-slider .slick-dots {
          bottom: 20px;
        }
        .product-slider .slick-dots li {
          margin: 0 4px;
        }
        .product-slider .slick-dots li button:before {
          display: none;
        }
      `}</style>
    </div>
  )
}
