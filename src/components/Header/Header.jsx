import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='header-container'>
      <img className='header-logo' src={logo} alt="Logo" />
      
      {/* Ícone do Menu Hambúrguer */}
      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`header-menu ${menuOpen ? 'active' : ''}`}>
        <Link className='header-span' to="/">Home</Link>
        <Link className='header-span' to="/sobre-nos">Sobre Nós</Link>
        <Link className='header-span' to="/projeto">Para Professores</Link>
        <Link className='header-span' to="/equipe">Para Alunos</Link>
        <Link className='header-span' to="/estrutura">Estrutura</Link>
        <Link className='header-span' to="/contato">Contato</Link>
        <button className='header-btn'>Inscrição</button>
      </div>
    </div>
  );
}

export default Header;
