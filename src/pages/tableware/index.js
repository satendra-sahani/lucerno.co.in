import Footer from '@/components/Footer'
import TableProduct from '@/components/tableware/TableProduct'
import TableSlider from '@/components/tableware/TableSlider'
import TableWare from '@/components/tableware/TableWare'
import React from 'react'

const index = () => {
  return (
    <div>
        <TableWare/>
        <TableSlider/>
        <TableProduct/>
        <Footer/>
    </div>
  )
}

export default index