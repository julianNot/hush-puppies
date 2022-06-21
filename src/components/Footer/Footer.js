import React from 'react'

import rise from '../../assets/images/footer/rise.png'
import certificado from '../../assets/images/footer/certificado.png'
import pagos from '../../assets/images/footer/pagos.png'

export const Footer = () => {
  return (
    <div className='mt-6'>
        <section className='mx-14 grid grid-cols-4'>
            <article>
                <h3 className='text-base font-serif font-bold text-paris-paving'>SERVICIO AL CLIENTE</h3>
                <ul className='space-y-2 mt-2'>
                    <li className='text-sm font-light'>CONTÁCTENOS</li>
                    <li className='text-sm font-light'>CAMBIOS Y DEVOLUCIONES</li>
                    <li className='text-sm font-light'>POLÍTICAS DE LA TIENDA</li>
                    <li className='text-sm font-light'>POLÍTICAS DE DATOS</li>
                </ul>
            </article>
            <article>
                <h3 className='text-base font-serif font-bold text-paris-paving'>MI CUENTA</h3>
                <ul className='space-y-2 mt-2'>
                    <li className='text-sm font-light'>MIS PEDIDOS</li>
                    <li className='text-sm font-light'>MIS DEVOLUCIONES</li>
                </ul>
            </article>
            <article>
                <h3 className='text-base font-serif font-bold text-paris-paving'>RECURSOS</h3>
                <ul className='space-y-2 mt-2'>
                    <li className='text-sm font-light'>TIENDAS</li>
                    <li className='text-sm font-light'>DEVOLUCIONES</li>
                </ul>
            </article>
            <article>
                <h3 className='text-base font-serif font-bold text-paris-paving'>NEWSLETTER</h3>
                <ul className='space-y-2 mt-2'>
                    <li className='text-sm font-light'>Regístrate para ser el primero en recibir nuestras noticias</li>
                    <form className=' p-2 my-1 border border-paris-paving'>
                        <div className='flex justify-between'>
                            <input className="p-1 font-serif text-sm" required placeholder='E-MAIL' type="email"/>
                            <button type='submit' className=''>
                                <box-icon class="align-middle" name='chevron-right'></box-icon>
                            </button>
                        </div>
                    </form>
                </ul>
            </article>
        </section>
        <section className='flex justify-center items-center space-x-3 my-7 border-t border-herring-silver py-5'>
            <div>
                <img src={rise} alt="Desarrolladores"  />
            </div>
            <div className='border-l border-r border-herring-silver px-3'>
                <img src={certificado} alt="Certificaciones"  />
            </div>
            <div>
                <img src={pagos} alt="Metodos de pago"  />
            </div>
        </section>
    </div>
  )
}

export default Footer