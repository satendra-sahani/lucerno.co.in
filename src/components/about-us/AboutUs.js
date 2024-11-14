'use client'

import Image from 'next/image'
import { useSpring, animated, config } from 'react-spring'
import { useInView } from 'react-intersection-observer'

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: config.molasses,
  })

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  )
}

export default function AboutPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const headerAnimation = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? 'translateY(0)' : 'translateY(-50px)',
    config: config.molasses,
  })

  const data=[
    {
        img:"/assets/home-decor/home-deco4.jpg",
        title:"Home Decoration",
    },
    {
        img:"/assets/tableware/tableware8.jpg",
        title:"Tableware",
    },
    {
        img:"/assets/ceramic-tiles/classic-white-tile.jpg",
        title:"Ceramic Tiles",
    },
  ]

  return (
    <div className="min-h-screen bg-background ">
      <animated.header ref={headerRef} style={headerAnimation} className="bg-gradient-to-r from-cyan-700 to-gray-900   text-primary-foreground  text-center p-3">
        <h1 class="text-6xl font-extrabold text-center text-white mb-12">About Our Company</h1>
        <p className="text-xl md:text-2xl text-white">Crafting Excellence in Home Decor</p>
      </animated.header>

      <main className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <section className="mb-20">
            <h5 className="text-4xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Our Story</h5>
            
            <div className="">
              <div className="">
                <Image
                  src="/assets/img/our-product.jpg"
                  alt="Our Workshop"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-[300px]"
                />
              </div>
              <div className=" mt-5">
                <p className="text-lg mb-4">
                  Founded in 2010, our company has been at the forefront of innovative home decor solutions. We believe that every home tells a story, and our products are designed to help you tell yours.
                </p>
                <p className="text-lg">
                  From humble beginnings in a small workshop to our current state-of-the-art facilities, we've always maintained our commitment to quality, sustainability, and customer satisfaction.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
        <section className="mb-20">
  <h2 className="text-4xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Our Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {data.map((product, index) => (
      <div key={index} className="bg-gray-700 rounded p-6 shadow-md text-center">
        {/* Image wrapper with fixed dimensions */}
        <div className="w-[18rem] h-[18rem] mx-auto mb-4 flex items-center justify-center bg-gray-800 rounded-full overflow-hidden">
          <img
            src={product.img}
            alt={product.title}
            className="object-cover w-full h-auto "
          />
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-white">{product.title}</h3>
        <p className='text-white'>Discover our range of {product.title.toLowerCase()} items designed to elevate your living spaces.</p>
      </div>
    ))}
  </div>
</section>

        </AnimatedSection>

        <AnimatedSection>
  <section className="mb-20">
    <h2 className="text-4xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Our Process</h2>
    <div className="flex flex-col items-center">
      {/* Image section */}
      <div className="mb-8 bg-gray-700 text-white rounded px-2 cursor-pointer py-2 ">
         Explore collections
      </div>
      {/* Text section */}
      <div className="w-full max-w-2xl">
        <ol className="list-decimal list-inside space-y-4">
          <li className="text-lg">
            <strong>Inspiration:</strong> Drawing inspiration from nature and art.
          </li>
          <li className="text-lg">
            <strong>Conceptualization:</strong> Creating unique concepts that blend form and function.
          </li>
          <li className="text-lg">
            <strong>Prototyping:</strong> Developing prototypes to refine designs.
          </li>
          <li className="text-lg">
            <strong>Production:</strong> Using sustainable materials and ethical practices.
          </li>
          <li className="text-lg">
            <strong>Quality Control:</strong> Ensuring each product meets our high standards.
          </li>
        </ol>
      </div>
    </div>
  </section>
</AnimatedSection>


        <AnimatedSection>
          <section className="text-center">
            <h2 className="text-4xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8">Explore our collections and find the perfect pieces to express your unique style.</p>
            <button className="bg-gray-700  text-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-hover transition">Shop Now</button>
          </section>
        </AnimatedSection>
      </main>
    </div>
  )
}
