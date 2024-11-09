import CeramicTileSection from '@/components/CeramicTileSection'
import Footer from '@/components/Footer'
import HomePage from '@/components/HomePage'
import ProductSlider from '@/components/ProductSlider'
import TablewareSection from '@/components/TablewareSection'
import React from 'react'

const index = () => {
  return (
    <div>
      <HomePage/>
      <ProductSlider/>
      <TablewareSection/>
      <CeramicTileSection/>
      <Footer/>
    </div>
  )
}

export default index