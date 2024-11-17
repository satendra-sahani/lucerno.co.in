import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const products = [
    {
      title: "Tiles",
      image: "/assets/home-page-img/tiles1.jpg",
      alt: "Modern bathroom with beige speckled walls and freestanding bathtub",
      description: "Welcome to NITCO Tiles. Where inspiration is abound. Choose over thousands of designs inspired by nature. Choose from different looks - wood, marble, vintage, textured, natural, modern and more. Select your choice of tile finishes from glazed to glossy, matte to rustic and much more. Welcome again, to the world of innovation!",
      link: "/products",
      cta: "VIEW ALL PRODUCTS",
    },
    {
      title: "Marble",
      image: "/assets/home-page-img/tiles2.jpg",
      alt: "Luxury bathroom with marble walls and mountain artwork",
      description: "Bring home an exquisite piece of splendor! Explore world's best quality marble sourced from the finest mines in Italy and around the globe. Enjoy the uniqueness of materials such as marble, granite, onyx, and semi-precious stones, transformed by NITCO into livable surfaces.",
      link: "/marble",
      cta: "VIEW MARBLE",
    },
    {
      title: "Mosaico",
      image: "/assets/home-page-img/tiles3.jpg",
      alt: "Kitchen scene with hexagonal tile backsplash",
      description: "Don't settle for routine. Jazz up your spaces with NITCO Mosaico. Check out an array of materials, textures & designs through our collections that help you turn your ideas & dreams into reality. Whether you need your design to be specially crafted in mosaic or have a customisation requirement, we can assist you.",
      link: "/mosaico",
      cta: "VIEW MOSAICO",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <Image
                src={product.image}
                width={600}
                height={400}
                alt={product.alt}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
              <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
              <Link href='/products' className="mt-auto">
                <span className="bg-gradient-to-r from-cyan-700 to-gray-900  text-white py-2 px-4 rounded-lg  transition duration-300 inline-block text-center w-full">
                  {product.cta} →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}