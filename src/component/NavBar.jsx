import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import '../assets/styles/navbar.scss'

const NavBar = () => {
  return (
    <nav>
      <div className="header">
        <img className="header__img" src="" alt="GameStack" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src="" alt="" />
          <p>Perfil</p>
      </div>
        <ul>
          <li><a href="/">Cuenta</a></li>
          <li><a href="/">Cerrar Sesión</a></li>
        </ul>
      </div>
      <div className="botonRes">
          <button>volver a buscar</button>
      </div>
      <SearchBar/>
      <div className="crearjuego">
      <Link to="/crearvideogame">crear juego</Link>
      </div>
      </div>
    </nav>
    
    
    
  )
}

export default NavBar