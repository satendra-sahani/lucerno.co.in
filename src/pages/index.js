import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import React from "react";

const collections = [
  {
    name: "Ondrea",
    description: "As the Ondrea Collection graces your table, the soft ombres unfurl like the petals of a rare, moonlit bloom, swirling ombres that dance across each piece. Like the whispers of a summer breeze, these dreamy effects evoke the ethereal beauty of the subconscious, transporting you to a realm where the boundaries of reality are softly blurred.",
    image: "https://plus.unsplash.com/premium_photo-1714675739403-ba377dfff0d4?q=80&w=800",
    theme: "bg-gradient-to-br from-purple-100 to-blue-50"
  },
  {
    name: "Kalima",
    description: "In the Kalima collection, every brushstroke tells a story of earthy elegance and free-spirited charm. Hand-painted with love and devotion, each piece is a one-of-a-kind masterpiece, infused with the warmth of terracotta hues and the soft, sun-kissed glow of earthy tones. This collection is an ode to the beauty of the imperfect, the unique, and the handmade.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800",
    theme: "bg-gradient-to-br from-orange-50 to-rose-50"
  },
  {
    name: "Geomea",
    description: "Experience the future of tableware with our mesmerizing collection, where intricate line work and faceted edges converge to create a visually stunning experience. Inspired by the beauty of geometry, each piece boasts a futuristic silhouette that seems to shift and change with every movement. The result is a truly unique and artistic collection that redefines the boundaries of tableware design, inviting you to dine in a world of optical illusions and futuristic flair.",
    image: "https://images.unsplash.com/photo-1631473128064-d9e62552545c?q=80&w=800",
    theme: "bg-gradient-to-br from-slate-50 to-zinc-100"
  },
  {
    name: "Kalimba",
    description: "Unveil the magic of our latest collection, where the art of conceal and reveal reaches new heights. Stacked and layered structures, meticulously crafted to nest within one another, create a mesmerizing dance of form and function. As each piece is carefully revealed, a new narrative unfolds, inviting you to experience the beauty of discovery. This masterful blend of artistry and functionality elevates the humble act of dining into a captivating ritual, where every moment is a testament to the transformative power of creativity.",
    image: "https://images.unsplash.com/photo-1658236559448-bef7596c99fd?q=80&w=800",
    theme: "bg-gradient-to-br from-amber-50 to-yellow-100"
  },
  {
    name: "Epoch",
    description: "Embark on a journey through the annals of time with our enchanting tableware collection, 'Epoch', our exquisite tableware collection, is a masterful blend of timeless elegance and modern sophistication. Inspired by the opulent geometrics and flourishes of Art Deco, the whimsical charm of vintage motifs, and the sleek lines of contemporary design, each piece is a work of art that transcends eras and trends. With intricate patterns, luxurious textures, and ornate details, Epoch invites you to dine in style, surrounded by the beauty and refinement of a bygone age, reimagined for the modern table.",
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=800",
    theme: "bg-gradient-to-br from-emerald-50 to-teal-100"
  },
  {
    name: "Kaleido",
    description: "Introducing \"Kaleido\", a vibrant tableware collection that embodies the spirit of joyful creativity. Inspired by the beauty of expressive craft, Kaleido brings together bold pattern development, vibrant colours, and wavy, wraparound lines to create a truly unique and artistic dining experience. From collaged colour blocks to woven checks and candy stripes, every piece in this collection is a celebration of playful elegance and whimsical charm, inviting you to add a splash of personality to your table setting and make every meal a masterpiece of self-expression.",
    image: "https://images.unsplash.com/photo-1626597825700-a38f569ed882?q=80&w=800",
    theme: "bg-gradient-to-br from-pink-50 to-rose-100"
  },
  {
    name: "Whimsy and Vine",
    description: "Indulge in the warmth and character of whimsy and vine a beautifully crafted tabletop collection that celebrates the rustic charm of traditional design. With classic patterns, soft hues, and distressed finishes, each piece tells a story of its own, evoking memories of family gatherings, lazy Sundays, and warm winter afternoons. Whether you're setting a formal table or a casual gathering, Whimsy nd vine brings a touch of nostalgia and elegance to your dining experience.",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?q=80&w=800",
    theme: "bg-gradient-to-br from-stone-50 to-warmGray-100"
  },
  {
    name: "Floraison",
    description: "Introducing \"Floraison\", a vibrant tableware collection that distils the essence of summertime into a kaleidoscope of colour and pattern. Lush florals, juicy fruits, and delicate foliage mingle in a joyful celebration of nature's beauty. Each piece is a unique work of art, featuring intricate illustrations and bold, vibrant hues that evoke the warmth and vitality of a summer garden.",
    image: "https://plus.unsplash.com/premium_photo-1675235478104-6cf56512bad8?q=80&w=800",
    theme: "bg-gradient-to-br from-lime-50 to-green-100"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Collections Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated collections, each telling its own unique story through design and craftsmanship.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div
                key={collection.name}
                className={`group relative overflow-hidden rounded-2xl ${collection.theme} transition-all duration-300 hover:shadow-xl`}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={`${collection.name} Collection`}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-sm text-gray-200 line-clamp-3">
                      {collection.description}
                    </p>
                    <button className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-200">
                      Explore Collection
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-black/5 rounded-full transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <div className="absolute top-6 right-6 w-16 h-16 border-2 border-black/5 rounded-full transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              View All Collections
            </a>
          </div> */}
        </div>
      </section>
      <Certifications/>

      <Footer />
    </div>
  );
};

export default Index;

