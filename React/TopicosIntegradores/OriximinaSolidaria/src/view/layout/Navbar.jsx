import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import solidarizze from '../../img/solidarizze.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img src={solidarizze} alt="Logo" height={50}/>
        </Link>
      </div>
      <div>
        <div className="hamburguer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} style={{ color: 'white'}}/>
        </div>
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="#">Como funciona?</Link></li>
          <li><Link to="#">Sobre nós</Link></li>
          <li><Link to="#">Contatos</Link></li>
          <li><Link to="#">Entrar</Link></li>
          <li><Link to="#">Criar campanha</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
