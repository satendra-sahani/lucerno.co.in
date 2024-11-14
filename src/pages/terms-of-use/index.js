import TermsOfUse from '@/components/terms-of-use/TermsOfUse'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import React from 'react'

const index = () => {
  return (
    <div>
      <Header/>
      <TermsOfUse/>
      <Footer/>
    </div>
  )
}

export default index