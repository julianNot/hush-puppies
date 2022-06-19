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
                    <li className="text-xs m-1 text-paris-paving px-2"><a href="/#">DIRECTORIO DE TIENDAS</a></li>
                    <li className="text-xs m-1 text-paris-paving px-2"><a href="/#">SERVICIO AL CLIENTE</a></li>
                    <li className="text-xs m-1 text-paris-paving"><a href="/#">MI CUENTA</a></li>
                </ul>
            </div>
            <section >
                <div className="flex justify-between px-14 my-2">
                    <Link to="/"><img src={ logo } alt="perrito"/></Link>
                    <div className="pr-0 my-auto">
                        <input className="p-2 my-2 border-2 border-paris-paving" placeholder='Buscar' type="text"/>
                        <p className="text-nocturne-red">ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000</p>
                    </div>
                </div>
                <div className="flex justify-between px-14 border-b-2 pb-2 border-paris-paving">
                    <ul className="flex space-x-12">
                        <li><a href="/#">HOMBRE</a></li>
                        <li><a href="/#">MUJER</a></li>
                        <li><a href="/#">BLOG</a></li>
                        <li><a href="/#">HISTORIA</a></li>
                        <li><a href="/#">TIENDAS</a></li>
                    </ul>
                    <Link to="/cart"><span>icon </span>Carrito {0}</Link>
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