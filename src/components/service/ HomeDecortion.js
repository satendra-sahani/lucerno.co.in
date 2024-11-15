import Image from 'next/image'


const decorationItems = [
  {
    id: 1,
    title: "Minimalist Wall Art",
    description: "Add a touch of elegance with our minimalist wall art pieces.",
    imageUrl: "/assets/home-decor/home-dec1.jpg"
  },
  {
    id: 2,
    title: "Cozy Throw Pillows",
    description: "Transform your space with our comfortable and stylish throw pillows.",
    imageUrl: "/assets/home-decor/home-deco2.jpg"
  },
  {
    id: 3,
    title: "Elegant Vases",
    description: "Elevate your decor with our collection of elegant vases.",
    imageUrl: "/assets/home-decor/home-deco3.jpg"
  },
  {
    id: 4,
    title: "Rustic Wall Clock",
    description: "Add character to your walls with our rustic wall clocks.",
    imageUrl: "/assets/home-decor/home-deco4.jpg"
  }
]

export default function HomeDecoration() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Home Decoration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {decorationItems.map((item) => (
            <div key={item.id} className="overflow-hidden transition-all border rounded duration-200 hover:shadow-lg">
              <div className="p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}