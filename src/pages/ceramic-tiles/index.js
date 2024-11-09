import CeramicProduct from '@/components/ceramic-tiles/CeramicProduct'
import CeramicTiles from '@/components/ceramic-tiles/CeramicTiles'
import SliderPage from '@/components/ceramic-tiles/SliderPage'
import Footer from '@/components/Footer'
import React from 'react'

const index = () => {
  return (
    <div>
        <CeramicTiles/>
        <CeramicProduct/>
        <SliderPage/>
        <Footer/>
    </div>
  )
}

export default index