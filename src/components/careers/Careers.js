import Image from 'next/image'
import React from 'react'

const Careers = () => {
  return (
    <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/Careers.gif')" }}>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">

          <h1 className="text-6xl font-extrabold text-center text-white bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">
            Come Work With Us
          </h1>

          <div className="mb-6">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <p className="text-lg md:text-xl opacity-80 transition-opacity duration-500 hover:opacity-100">
            Join our team and make an impact!
          </p>
        </div>
      </div>
    </section>

  )
}

export default Careers