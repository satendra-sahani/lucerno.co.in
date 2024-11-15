import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const categories = [
    {
      title: "BATHROOM TILES",
      image: "/assets/home-page-img/bathroom-tiles1.jpg",
      alt: "Modern bathroom with beige tiles and freestanding bathtub",
      href: "/bathroom-tiles"
    },
    {
      title: "KITCHEN TILES",
      image: "/assets/home-page-img/bathroom-tiles2.jpg",
      alt: "Contemporary kitchen with hexagonal backsplash tiles",
      href: "/kitchen-tiles"
    },
    {
      title: "LIVING ROOM TILES",
      image: "/assets/home-page-img/bathroom-tiles3.jpg",
      alt: "Elegant living room with large format wall tiles",
      href: "/living-room-tiles"
    },
    {
      title: "BEDROOM TILES",
      image: "/assets/home-page-img/bathroom-tiles4.jpg",
      alt: "Modern bedroom with herringbone pattern flooring",
      href: "/bedroom-tiles"
    },
    {
      title: "OUTDOOR TILES",
      image: "/assets/home-page-img/bathroom-tiles5.jpg",
      alt: "Outdoor dining area with dark stone-look tiles",
      href: "/outdoor-tiles"
    },
    {
      title: "COMMERCIAL TILES",
      image: "/assets/home-page-img/bathroom-tiles6.jpg",
      alt: "Commercial space with decorative blue wall tiles",
      href: "/commercial-tiles"
    }
  ]

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Tiles by Space</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Your spaces are a reflection of your tastes. Find design inspiration right here! Whether you are looking for Kitchen tiles, Bathroom tiles or
            tiles to spruce up your living room, your search ends here. Explore a wide variety of tile designs that suit your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-center"><a href="/products">{category.title}</a></h2>
            </Link>
          ))}
        </div>
        <div className="w-full text-center mt-5">
          <button className="border border-gray-900 py-2 px-2 rounded">
            <a href="/product">View All Tiles</a>
          </button>
        </div>
      </div>


      <div class="nt-wrapper collection-wrapper landing-featured-collection home-landing-featured-collection">

        <div class="container mx-auto">
          <img src="https://www.nitco.in/images/catalogue-maker-banner-home.jpg?v=01102023" class="desktop-banner" style={{ width: '100%', marginBottom: '60px' }} />

        </div>

      </div>



    </>

  )
}