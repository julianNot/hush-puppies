import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/images/logo-navbar.png'


const Navbar = ({ messageDiscount }) => {
  return (
    <header className='w-full absolute top-0'>
        <nav className="bg-nocturne-red w-full h-16">
            <p className="text-center text-xl p-2 text-white font-bold">{ messageDiscount }</p>
            <div className="bg-herring-silver w-full h-6">
                <ul className="flex justify-end items-center px-14">
                    <li className="font-medium text-xs m-1 text-paris-paving px-2"><a href="/#">DIRECTORIO DE TIENDAS</a></li>
                    <li className="font-medium text-xs m-1 text-paris-paving px-2"><a href="/#">SERVICIO AL CLIENTE</a></li>
                    <li className="font-medium text-xs m-1 text-paris-paving"><a href="/#">MI CUENTA</a></li>
                </ul>
            </div>
            <section >
                <div className="flex justify-between px-14 my-2">
                    <Link to="/products"><img src={ logo } alt="perrito"/></Link>
                    <div className="my-1">
                        <div className=' flex justify-end items-center mb-3'>
                            <div className='border px-2 border-paris-paving inline-block'>
                                <input className="font-serif my-2" placeholder='Buscar' type="text"/>
                                <button>
                                    <box-icon class="align-middle" name='chevron-right'></box-icon>
                                </button>
                            </div>
                        </div>
                        <p className="font-serif text-nocturne-red">ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</p>
                    </div>
                </div>
                <div className="flex justify-between px-14 border-b pb-2 border-paris-paving">
                    <ul className="flex space-x-12">
                        <li><a className='font-serif text-paris-paving' href="/#">HOMBRE</a></li>
                        <li><a className='font-serif text-paris-paving' href="/#">MUJER</a></li>
                        <li><a className='font-serif text-paris-paving' href="/#">BLOG</a></li>
                        <li><a className='font-serif text-paris-paving' href="/#">HISTORIA</a></li>
                        <li><a className='font-serif text-paris-paving' href="/#">TIENDAS</a></li>
                    </ul>
                    <Link to="/cart" className='text-paris-paving font-serif'><box-icon class="align-middle" color="#737374" name='lock-alt'></box-icon><span>CARRITO {0}</span></Link>
                </div>
            </section>
        </nav>
        <section className='relative'>
            <Outlet />
        </section>
    </header>
  )
}

export default Navbar