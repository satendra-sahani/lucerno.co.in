import Careers from '@/components/careers/Careers'
import JoinTeam from '@/components/careers/JoinTeam'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import React from 'react'

const index = () => {
  return (
    <div>
        <Header/>
        <Careers/>
        <JoinTeam/>
        <Footer/>
    </div>
  )
}

export default index