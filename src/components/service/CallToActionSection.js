import React from 'react'

const CallToActionSection = () => {
  return (
    <section className=" p-4 rounded">
      <div className='py-16 px-4 md:px-8 rounded lg:px-16 bg-gray-900 bg-gradient-to-r from-cyan-700 to-gray-900'>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-white">Explore our full collection and find the perfect pieces for your home.</p>
          <button variant="secondary" size="lg" className='bg-white text-gray-900 rounded px-2 py-2'>
            Shop All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection