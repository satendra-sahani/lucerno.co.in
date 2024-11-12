import Favorites from '@/components/favorites/Favorites'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import React from 'react'

const index = () => {
  return (
    <div>
        <Header/>
        <Favorites/>
        <Footer/>
    </div>
  )
}

export default index