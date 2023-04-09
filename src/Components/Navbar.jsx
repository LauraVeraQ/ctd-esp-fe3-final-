import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from "./utils/context";
import logo from '../assets/DH.ico';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dispatch } = useGlobalContext();
  const toggleTheme = () => {
    dispatch({
      type: 'toggle'
    })
  }
  return (
    <nav className='text-2xl my-2 flex justify-between'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='flex'>
        <img src={logo} alt="Logo" className='mr-10 pb-2'></img>
        <Link className='bg-white text-black dark:bg-black dark:text-white' to="/">Home</Link>
        <Link className='bg-white text-black dark:bg-black dark:text-white' to="/favorites">Favorites</Link>
        <Link className='bg-white text-black dark:bg-black dark:text-white' to="/contact">Contact us</Link>
      </div>
      <button
        onClick={() => toggleTheme()}
        className='border-2 border-black rounded-md px-3 py-2 text-sm dark:border-white'>
        Change Theme
      </button>
    </nav>
  )
}

export default Navbar