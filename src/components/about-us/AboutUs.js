"use client";

import Image from "next/image";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import { WashingMachineIcon as Dishwasher, Microwave, LayersIcon as LayersStack, Soup, Thermometer, Circle, Settings, WineOff } from 'lucide-react';

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

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
    <div className="mb-4 text-blue-900">
      <Icon size={48} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function AboutPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerAnimation = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0)" : "translateY(-50px)",
    config: config.molasses,
  });

  const features = [
    {
      icon: Dishwasher,
      title: "Dishwasher Safe",
      description: "Our porcelain is fired at high temperatures which making it highly resistant to repeated dish washing cycles at high temperature."
    },
    {
      icon: Microwave,
      title: "Microwave & Salamander Safe",
      description: "Ariane Porcelain products are both microwave and salamander safe due to their heat resistant layer of glaze."
    },
    {
      icon: LayersStack,
      title: "Perfect Functionality",
      description: "All our designs focus on absolute functionality. Most items are stackable including cups, bowls and platters, which enables the most efficient use of space."
    },
    {
      icon: Soup,
      title: "High Chip Resistance",
      description: "The special high alumina material used by Ariane Fine Porcelain offers strength, durability and resistance against chipping to critical points like edges of cups, plates and handles."
    },
    {
      icon: Thermometer,
      title: "Thermal Shock Proof",
      description: "Ariane Fine Porcelain not only retains heat to keep the food warm, but also is resistant to variations in temperature."
    },
    {
      icon: Circle,
      title: "Smooth Appearance",
      description: "The special glaze fired at high temperatures not only gives all our porcelain a smooth, clean finish, but also ensures that it becomes completely non-porous, guaranteeing higher levels of hygiene."
    },
    {
      icon: Settings,
      title: "Abrasion Proof",
      description: "The special glazing fired under high temperature ensures strong resistance to scratches or abrasions."
    },
    {
      icon: WineOff,
      title: "Limited Danger in Case of Breakage",
      description: "The products are designed to avoid breakage hazards, as they break cleanly into safely manageable pieces."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <section className="mb-20">
            <h5 className="text-6xl font-extrabold text-center text-gray-900 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">
              About US
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
              <div className="mt-5">
                <p className="text-lg mb-4">
                  Lucerno is a luxury tableware and home decor brand that
                  combines the elegance of ceramics with the sophistication of
                  concrete terrazzo. Founded by Megha Pathre, a product designer
                  with a passion for creating beautiful and functional pieces,
                  and her father Mahesh Pathre, a retired bank manager with a
                  keen eye for quality and craftsmanship, Lucerno is a
                  family-run business that values tradition, innovation, and
                  attention to detail. With a focus on creating unique and
                  timeless pieces that bring people together, Lucerno's
                  collection includes exquisite ceramic tableware, stunning
                  concrete terrazzo decor, and elegant accessories that elevate
                  the art of fine dining and living. From the initial design
                  concept to the final product, every aspect of Lucerno's
                  creations is carefully crafted to ensure that it not only
                  looks stunning but also provides a luxurious and enjoyable
                  experience. From the subtle curves of our ceramics to the
                  textured beauty of our concrete& terrazzo decor, every detail
                  is meticulously considered to create a truly exceptional
                  product. By combining traditional craftsmanship with modern
                  design sensibilities, Lucerno creates pieces that are both
                  beautiful and functional, making every meal a special occasion
                  and every space a reflection of refined taste.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mb-20">
            <h2 className="text-6xl font-extrabold text-center text-gray-900 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}

