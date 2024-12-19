"use client";

import Image from "next/image";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { Fragment } from "react";

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: config.molasses,
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default function AboutPage() {
  return (
    <Fragment>
     <Header/>
    <div className="min-h-screen bg-background ">
      <main className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <section className="mb-20">
            <h5 className="text-6xl font-extrabold text-center text-gray-900 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">
              Craftmanship
            </h5>

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
                  Lucerno crafts exquisite designs for the home that embody the
                  perfect union of luxury, functionality, and artistry. With an
                  unwavering commitment to excellence and quality, every Lucerno
                  piece is meticulously crafted using proprietary techniques
                  that set us apart. Each item bearing the Lucerno mark has been
                  carefully shaped by skilled artisans, employing time-honored
                  methods passed down through generations. At Lucerno,
                  craftsmanship is an art form. Our skilled artisans pour their
                  hearts and souls into every piece, combining traditional
                  techniques with modern innovation. From the subtle nuances of
                  hand-painted ceramics to the rugged beauty of hand-finished
                  concrete terrazzo, every detail is meticulously considered.
                  Our craftsmen are the guardians of a timeless tradition, one
                  that values the beauty of imperfection and the uniqueness of
                  the human hand. The result is a collection of truly
                  one-of-a-kind pieces that celebrate the art of the handmade.
                  Every Lucerno piece is a testament to the skill, dedication,
                  and passion of our artisans.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
    <Footer/>
    </Fragment>
  );
}
