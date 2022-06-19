import React from 'react'

const ProductView = ( { shoes } ) => {

  return (
    <div>
      <main className='px-14 mt-40 grid grid-cols-2'>
        <h2>HUSPUPPIESCO/CALZADO/{ shoes.nombre.toUpperCase() }</h2>
          <section className='mx-28 w-11/12'>
              <h2>{ shoes.nombre.toUpperCase() }</h2>
              <p>${ shoes.precio }</p>
              <p>Cod. de producto { shoes.referencia }</p>
              <div>
                <h3>Color</h3>
                <img className='border cursor-pointer' src={ `/products/${shoes.foto}` } width={70}  alt="miniautura zapato" />
              </div>
              <h2>TALLA</h2>
              <ul className='w-11/12 space-y-3'>
                <div className='flex'>
                  <li className='border h-12 w-12 text-center mr-5 block '>5</li>
                  <li className='border h-12 w-12 text-center mr-5 block '>5.5</li>
                  <li className='border h-12 w-12 text-center mr-5 block '>6</li>
                  <li className='border h-12 w-12 text-center mr-5 block '>6.5</li>
                  <li className='border h-12 w-12 text-center mr-5 block '>7</li>
                </div>
                <div className='flex '>
                  <li className='border h-12 w-12 text-center mr-5 block '>7.5</li>
                  <li className='border h-12 w-12 text-center mr-5 block '>8</li>
                  <li className='border h-12 w-12 text-center mr-5 block '>8.5</li>
                  <li className='border h-12 w-12 text-center mr-5 block '>9</li>
                  <li className='border h-12 w-12 text-center mr-5 block '>9.5</li>
                </div>
              </ul>
              <a className='underline' href="/#">GUÍA DE TALLAS</a>
              <div className='flex'>
                <button className='bg-nocturne-red px-7 py-3 text-white'>AÑADIR AL CARRIO</button>
                <span className='py-3 ml-7'>Icono corazon</span>
              </div>
          </section>
          <section className='-mt-72' >
          <img className='border-b' src={ `/products/${shoes.foto}` } width={500} height={350} alt="product"/>
              <ul className='flex space-x-2 mt-2'>
                <li><img src={ `/products/${shoes.foto}` } width="70" alt="miniautura zapato"/></li>
                <li><img src={ `/products/${shoes.foto}` } width="70" alt="miniautura zapato"/></li>
                <li><img src={ `/products/${shoes.foto}` } width="70" alt="miniautura zapato"/></li>
              </ul>
          </section>
      </main>
      <section className='px-14'>
        <div>
          <h2>DETALLES DE PRODUCTO</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis asperiores eveniet harum quaerat suscipit necessitatibus hic cupiditate nam, culpa voluptatibus aliquam magnam, facilis nesciunt, tempore molestiae. Perspiciatis itaque eos nostrum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis asperiores eveniet harum quaerat suscipit necessitatibus hic cupiditate nam, culpa voluptatibus aliquam magnam, facilis nesciunt, tempore molestiae. Perspiciatis itaque eos nostrum.</p>
        </div>
        <div>
          <h2>TECNOLOGIAS</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, molestiae. Quo, est et ad doloribus natus explicabo cupiditate odio. Mollitia, maiores deserunt sint cupiditate tempora porro molestiae modi ullam doloremque!</p>
        </div>
      </section>
    </div>
  )
}

export default ProductView