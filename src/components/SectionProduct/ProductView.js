import React from 'react'

import BoxSize from '../shared/BoxSize'

const ProductView = ( { shoes } ) => {

  return (
    <div>
      <main className='px-14 mt-40 grid grid-cols-2'>
          <section>
            <h2 className='font-montserrat text-paris-paving pb-6'>HUSPUPPIESCO / CALZADO / { shoes.nombre.toUpperCase() }</h2>
            <img className='border-b' src={ `/products/${shoes.foto}` } width={500} height={350} alt="product"/>
              <ul className='flex space-x-2 mt-2'>
                <li><img className='cursor-pointer' src={ `/products/${shoes.foto}` } width="70" alt="miniautura zapato"/></li>
                <li><img className='cursor-pointer' src={ `/products/${shoes.foto}` } width="70" alt="miniautura zapato"/></li>
                <li><img className='cursor-pointer' src={ `/products/${shoes.foto}` } width="70" alt="miniautura zapato"/></li>
              </ul>
          </section>
          <section className='mx-20 mt-6 space-y-4'>
              <div className="">
                <h2 className="font-serif font-bold text-2xl tracking-wider text-paris-paving">{ shoes.nombre.toUpperCase() }</h2>
                <p className="font-serif text-2xl font-bold text-nocturne-red">${ shoes.precio }</p>
                <p className="text-herring-silver">Cod. de producto { shoes.referencia }</p>
              </div>
              <div className="pb-3">
                <h3 className="font-sans text-paris-paving text-base pb-2">COLOR</h3>
                <img className='border border-paris-paving cursor-pointer' src={ `/products/${shoes.foto}` } width={70}  alt="miniautura zapato" />
              </div>
              <div>
                <h2 className="font-sans text-paris-paving text-base pb-1">TALLA</h2>
                <ul className='w-11/12 space-y-4 pb-2'>
                  <div className='flex space-x-4'>
                    <BoxSize size={5} />
                    <BoxSize size={5.5} />
                    <BoxSize size={6} />
                    <BoxSize size={6.5} />
                    <BoxSize size={7} />
                  </div>
                  <div className='flex space-x-4'>
                    <BoxSize size={7.5} />
                    <BoxSize size={8} />
                    <BoxSize size={8.5} />
                    <BoxSize size={9} />
                    <BoxSize size={9.5} />
                  </div>
                </ul>
                <a className='py-3 underline underline-offset-2 text-paris-paving font-montserrat font-medium block' href="/#">GUÍA DE TALLAS</a>
              </div>
              <div className='flex'>
                  <button className='bg-nocturne-red px-14 py-3 text-white'>AÑADIR AL CARRIO</button>
                  <span className='py-3 ml-7 cursor-pointer'><box-icon class="ml-7" type='solid' color="#737374" name='heart'></box-icon></span>
              </div>
          </section>
      </main>
      <section className='px-14'>
        <div className='mt-2'>
          <h2 className='text-xl font-serif text-paris-paving pb-1 border-b tracking-wider font-extrabold'>DETALLES DE PRODUCTO</h2>
          <p className='text-lg text-justify font-montserrat text-paris-paving my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis asperiores eveniet harum quaerat suscipit necessitatibus hic cupiditate nam, culpa voluptatibus aliquam magnam, facilis nesciunt, tempore molestiae. Perspiciatis itaque eos nostrum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis asperiores eveniet harum quaerat suscipit necessitatibus hic cupiditate nam, culpa voluptatibus aliquam magnam.</p>
        </div>
        <div className='mt-4'>
          <h2 className='text-xl font-serif text-paris-paving pb-1 border-b tracking-wider font-extrabold'>TECNOLOGÍAS</h2>
          <p className='text-lg text-justify font-montserrat text-paris-paving my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestiae. Quo, est et ad doloribus natus explicabo cupiditate odio. Mollitia, maiores deserunt sint cupiditate tempora porro molestiae modi ullam doloremque!</p>
        </div>
      </section>
    </div>
  )
}

export default ProductView