import ImageGallery from '@/components/products-details/ImageGallery'
import ProductsDetails from '@/components/products-details/ProductsDetails'
import SimilarProduct from '@/components/products-details/SimilarProduct'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import TopHeader from '@/layout/TopHeader'
import React from 'react'

const index = () => {
  return (
    <div>
        {/* <TopHeader/> */}
        <Header/>
        <ProductsDetails/>
        <ImageGallery/>
        <SimilarProduct/>
        <Footer/>
    </div>
  )
}

export default index