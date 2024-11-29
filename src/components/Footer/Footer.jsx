import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-top'>
        <div className='contact-info'>
          <h4 className='contact-title'>Contate-nos:</h4>
          <p>Email: cursinhoherbert@gmail.com</p>
          <p>Telefone: (19) 555-567-8901</p>
          <p>Endereço: R. Dusolina Leone Tournieux, 249 - Parque Res. Vila União, Campinas - SP, 13060-769</p>
        </div>
        <div className='newsletter'>
          <input type='email' placeholder='Email' className='email-input' />
          <button className='subscribe-btn'>Inscreva-se para Novidades!</button>
        </div>
      </div>

      <div className='footer-bottom'>
        <nav className='footer-nav'>
          <a href='#'>Sobre Nós</a>
          <a href='#'>Professores</a>
          <a href='#'>Alunos</a>
          <a href='#'>Estrutura</a>
          <a href='#'>Contato</a>
        </nav>

        <div className='social-icons'>
          <a href='#'><i className='fab fa-linkedin'></i></a>
          <a href='#'><i className='fab fa-facebook'></i></a>
          <a href='#'><i className='fab fa-twitter'></i></a>
        </div>

        <div className='footer-legal'>
          <p>© 2024 AToSh. Todos os Direitos Reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
