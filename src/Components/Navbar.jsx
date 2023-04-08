import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from "./utils/context";

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
      <div>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">Contact us</Link>
      </div>
      <button
        onClick={() => toggleTheme()}
        className='border-2 border-black rounded-md px-3 py-2 text-sm'>
        Change Theme
      </button>
    </nav>
  )
}

export default Navbar