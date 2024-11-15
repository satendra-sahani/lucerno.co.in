import Image from 'next/image'



const tablewareItems = [
  {
    id: 1,
    name: "Elegant Porcelain Dinner Set",
    description: "A 20-piece set of fine porcelain dinnerware with a delicate floral pattern.",
    imageUrl: "/assets/tableware/tableware1.jpg",
    category: "Dinner Set",
    price: "$129.99"
  },
  {
    id: 2,
    name: "Modern Stainless Steel Cutlery",
    description: "Sleek and durable 24-piece cutlery set perfect for everyday use and special occasions.",
    imageUrl: "/assets/tableware/tableware2.jpg",
    category: "Cutlery",
    price: "$79.99"
  },
  {
    id: 3,
    name: "Handcrafted Ceramic Serving Bowl",
    description: "Large, beautifully textured serving bowl ideal for salads and side dishes.",
    imageUrl: "/assets/tableware/tableware3.jpg",
    category: "Serving",
    price: "$49.99"
  },
  {
    id: 4,
    name: "Crystal Wine Glasses Set",
    description: "Set of 6 elegant crystal wine glasses to elevate your dining experience.",
    imageUrl: "/assets/tableware/tableware4.jpg",
    category: "Glassware",
    price: "$89.99"
  },
  {
    id: 5,
    name: "Bamboo Placemats and Coasters",
    description: "Eco-friendly set of 6 placemats and coasters for a natural, rustic touch.",
    imageUrl: "/assets/tableware/tableware5.jpg",
    category: "Table Accessories",
    price: "$34.99"
  },
  {
    id: 6,
    name: "Artisanal Ceramic Mug Set",
    description: "Set of 4 handmade ceramic mugs, each with unique glazing patterns.",
    imageUrl: "/assets/tableware/tableware6.jpg",
    category: "Drinkware",
    price: "$59.99"
  }
]

export default function InspiringTableware() {
  return (
    <section className="w-full   bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Inspiring Tableware</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Elevate your dining experience with our curated collection of exquisite tableware.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tablewareItems.map((item) => (
            <div key={item.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
              <div className="p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 text-white right-2 bg-primary text-primary-foreground">
                    {item.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{item.price}</span>
                    <button className="bg-primary text-primary-foreground px-4 border py-2 rounded-md hover:bg-primary/90 transition-colors">
                      <a href='/contact-us'>Explore Now</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}