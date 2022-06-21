import React from 'react'
import ProductView from '../SectionProduct/ProductView'

import shoesJson from '../../data/zapato.json'
import Product from '../products/Product'
import Social from '../../Social/Social'
import Footer from '../Footer/Footer'

export const Home = () => {

  const getShoesForNumber = (init,end) =>{
    return shoesJson.slice(init,end)
  }

  return (
    <div>
        <ProductView shoes={shoesJson[0]} />
        <h2 className='mx-14 my-3 text-lg p-1 font-serif font-extrabold bg-herring-silver'>COMPLETA TU LOOK</h2>
        <section className='mx-14 max-w-full flex justify-center items-center overflow-x-hidden'>
          {getShoesForNumber(0,4).map((shoes, index) =>
            <Product key={index} shoes={shoes}/>
            )}
        </section>
        <h2 className='mx-14 my-3 text-lg p-1 border-b font-serif font-bold text-paris-paving'>PRODUCTOS RECOMENDADOS</h2>
        <section className='mx-14 mb-7 max-w-full flex justify-center items-center overflow-x-hidden'>
          {getShoesForNumber(4,8).map((shoes,index) =>
              <Product key={index} shoes={shoes}/>
            )}
        </section>
        <Social name="@HUSHPUPPIESCO"/>
        <Footer />
    </div>
  )
}

export default Home