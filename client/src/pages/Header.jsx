import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const [nombrePag, setNombrePag] = useState('');
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setMenuOpen(false);
  };

  const usuario = useSelector((state) => state.usuario);
  if (usuario === null) {
    setMenuOpen(true)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-red-600 shadow-lg flex items-center justify-between px-4 py-3 md:px-8 md:py-4 z-50">
      <h1 className="text-xl md:text-2xl font-bold text-white">
        <Link to="/" className="hover:text-black transition duration-200">Cinux</Link>
      </h1>

      <button
        className="text-white md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <nav className={`nav font-semibold text-lg text-white flex-grow ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center`}>
        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <li>
            <Link to="/home" className="hover:text-black transition duration-200" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/home/peliculas" className="hover:text-black transition duration-200" onClick={closeMenu}>Películas</Link>
          </li>
          <li>
            <Link to="/home/sedes" className="hover:text-black transition duration-200" onClick={closeMenu}>Sedes</Link>
          </li>
          <li>
            <Link to="/home/dulceria" className="hover:text-black transition duration-200" onClick={closeMenu}>Dulcería</Link>
          </li>
          <li className="md:hidden">
            <Link to="/login" className="hover:text-black transition duration-200" onClick={closeMenu}>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex items-center space-x-2">
        <h2 className="font-bold text-white">Hola {usuario.nombre}!!!</h2>
        <Link to="/login" className="text-white hover:bg-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-3 lg:px-4 py-2 lg:py-2.5 flex items-center">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>

    </header>
  );
};

export default Header;