
import Hero from '@/components/Hero'
import Content from '@/components/section/Content'
import DiscoverMore from '@/components/section/DiscoverMore'
import NewSection from '@/components/section/NewSection'
import SliderPage from '@/components/section/SliderPage'
import Stones from '@/components/section/Stones'
import Store from '@/components/section/Store'
import TilesSection from '@/components/section/TilesSection'
import Video from '@/components/section/Video'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import React from 'react'

const index = () => {
  return (
    <div>
      <Header />
      <Hero />
       <SliderPage/> 
      <NewSection />
      <Video />
      <DiscoverMore />
      <TilesSection/>
      <Stones/>
      <Store/>
      <Content/>
      <Footer />
    </div>
  )
}

export default index