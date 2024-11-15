import Image from 'next/image'

export default function Component() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 md:mb-12 lg:text-4xl">
          Featured Collections
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
          <div className="overflow-hidden">
            <div className="p-0">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">THE 2 BY 4 COLLECTION - 600X1200</h3>
                <p className="text-muted-foreground mb-4">
                  Our latest collection of 600 by 1200 tiles, draws inspiration from the timeless
                  elegance of marble, the earthy charm of stone, the warmth of wood, and the brush
                  strokes of...
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/assets/home-page-img/collection1.jpg"
                  alt="Modern bathroom interior with blue tiles and white bathtub"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>

            </div>
          </div>
          <div className="overflow-hidden">
            <div className="p-0">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">KRATOS COLLECTION 2023</h3>
                <p className="text-muted-foreground mb-4">
                  Kratos collection consists of tiles which to be used in outdoor areas like garden,
                  parking area, outside swimming pool, on the terrace and balcony.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/assets/home-page-img/collection2.jpg"
                  alt="Outdoor terrace with modern furniture and terrazzo tiles"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}