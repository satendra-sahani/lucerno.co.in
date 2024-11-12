import ContactUs from '@/components/contact-us/ContactUs'
import Form from '@/components/contact-us/Form'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import React from 'react'

const index = () => {
  return (
    <div>
        <Header/>
        <ContactUs/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default index