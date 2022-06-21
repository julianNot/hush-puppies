import React from 'react'

export const Product = ({shoes}) => {
  return (
    <article className='m-2 p-1 h-full'> 
      <img className='w-72 h-56' src={`/products/${shoes.foto}`} alt={"imagen" + shoes.nombre} />
      <ul className='flex space-x-2 mt-2'>
        <li><img className='cursor-pointer' src={ `/products/${shoes.foto}` } width="65" alt="miniautura zapato"/></li>
        <li><img className='cursor-pointer' src={ `/products/${shoes.foto}` } width="65" alt="miniautura zapato"/></li>
      </ul>
      <h2 className='text-center font-sans'>{shoes.nombre}</h2>
      <p className='text-center text-nocturne-red text-xl mt-4 mb-2'>${shoes.precio}</p>
      <button className='bg-nocturne-red px-14 py-3 text-white'>AÑADIR AL CARRIO</button>
    </article> 
  )
}

export default Product;
