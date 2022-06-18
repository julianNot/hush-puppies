import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductView from '../SectionProduct/ProductView'

export const Home = () => {
  return (
    <div>
        <Navbar messageDiscount="HOT SALE -30% EN SANDALIAS"/>
        <ProductView />
    </div>
  )
}

export default Home