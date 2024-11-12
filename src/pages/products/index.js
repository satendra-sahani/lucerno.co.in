import Products from '@/components/products/Products'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import React from 'react'

const index = () => {
  return (
    <div>
        <Header/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default index