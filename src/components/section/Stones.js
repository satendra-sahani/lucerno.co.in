import Image from 'next/image'

export default function Stones() {
  const collections = [
    {
      title: "Quartzite Collection",
      image: "/assets/home-page-img/Quartzite1.jpg",
      alt: "Black quartzite stone with elegant white veining patterns"
    },
    {
      title: "Onyx Collection",
      image: "/assets/home-page-img/Quartzite2.jpg",
      alt: "Beige onyx stone with golden undertones"
    },
    {
      title: "Marble Collection",
      image: "/assets/home-page-img/Quartzite3.jpg",
      alt: "White marble with flowing gray veining patterns"
    },
    {
      title: "Granite Collection",
      image: "/assets/home-page-img/Quartzite4.jpg",
      alt: "Dark gray granite with natural speckled patterns"
    }
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover Natural Stones
          </h2>
          <p className="mt-4 text-muted-foreground">
            The uniqueness of materials such as marble, granite, onyx, and semi-precious stones, is transformed by NITCO into livable surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {collections.map((collection, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 text-white">
                  <h3 className="text-lg font-semibold">{collection.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="min-w-[200px] border px-2 py-2 rounded"
          >
            <a href='/products'>  View all Marble</a>
          </button>
        </div>
      </div>
    </section>
  )
}
