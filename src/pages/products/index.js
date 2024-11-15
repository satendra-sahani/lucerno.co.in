import Hero from '@/components/products/Hero'
import Products from '@/components/products/Products'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import React from 'react'

const index = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default index