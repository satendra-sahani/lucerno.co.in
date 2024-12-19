import Image from 'next/image'

export default function Certifications() {
  const certifications = [
    {
      logo: "/assets/certification/Quality Management.png",
      title: "Quality Management",
      location: "Germany",
      alt: "Bureau Veritas Certification Logo"
    },
    {
      logo: "/assets/certification/Physical Test Certificate.png",
      title: "Physical Test Certificate",
      location: "France",
      alt: "SFC France Logo"
    },
    {
      logo: "/assets/certification/Quality Testing.png",
      title: "Quality Testing",
      location: "U.K.",
      alt: "Lucideon Logo"
    },
    {
      logo: "/assets/certification/Social Accountability.png",
      title: "Social Accountability",
      location: "Germany",
      alt: "TÜV Rheinland Logo"
    },
    {
      logo: "/assets/certification/Vegetarian.png",
      title: "100% Vegetarian",
      location: "U.K.",
      alt: "Vegetarian Society Logo"
    },
    {
      logo: "/assets/certification/As per Islamic Guideline.png",
      title: "As per Islamic Guideline",
      location: "India",
      alt: "Halal Certification Logo"
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-[#0A2B5D] mb-8">
        Certifications
      </h2>

      {/* Single Row Certification Cards */}
      <div className="flex overflow-x-auto gap-4 pb-4 mb-12 scrollbar-hide">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[180px] p-3 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative w-16 h-16 mb-2">
              <Image
                src={cert.logo}
                alt={cert.alt}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xs font-medium text-gray-900 line-clamp-2 " style={{fontWeight:"bold"}}>
              {cert.title}
            </h3>
            <p className="text-xs text-gray-600 mt-1" style={{fontWeight:"bold"}}>
              {cert.location}
            </p>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed text-justify">
            We strive to meet stringent global quality standards. Our list of certifications is a
            strong indication of our commitment to providing customers with high-quality
            products. By meeting physical tests certification from SFC France, we
            demonstrate that the porcelain tableware is strong, durable, and can withstand
            normal wear and tear, ensuring a longer lifespan. Quality tests certifications from
            lucideon in the UK further ensure that the tableware can withstand the rigors of
            everyday use, cleaning, and even temperature changes.
          </p>
          <p className="text-gray-600 leading-relaxed text-justify">
            We offer products which are dishwasher safe, edge-chip resistant, microwave &
            oven safe, and steel/metal marking test approved. These are essential in today's
            market as consumers continue to look for quality and safety assurance.
          </p>
          <button className="bg-[#0A2B5D] text-white px-8 py-3 rounded hover:bg-[#0A2B5D]/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Learn More
          </button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/assets/certification/hero-side imag.jpg"
            alt="Manufacturing Process"
            fill
            className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

