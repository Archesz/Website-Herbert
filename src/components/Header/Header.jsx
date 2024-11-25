import React from 'react'
import './Header.scss'
import logo from '../../assets/images/logo.png'

function Header() {
  return (
    <div className='header-container'>

      <img className='header-logo' src={logo} />

      <div className='header-menu'>

        <span>Home</span>
        <span>Sobre Nós</span>
        <span>Projeto</span>
        <span>Equipe</span>
        <span>Estrutura</span>
        <span>Contato</span>

        <button className='header-btn'>Inscrição</button>

      </div>

    </div>
  )
}

export default Header