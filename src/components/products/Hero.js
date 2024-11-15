import Image from "next/image"

export default function Hero() {
 
  return (
    <div className="w-full">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-[#e8d5c7]">
          <Image
            src="/assets/home-page-img/p-hero-img1.jpg"
            alt="Glazed Vitrified Tiles"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}