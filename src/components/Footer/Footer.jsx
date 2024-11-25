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
          <button className='subscribe-btn'>Subscribe to news</button>
        </div>
      </div>

      <div className='footer-bottom'>
        <nav className='footer-nav'>
          <a href='#'>About us</a>
          <a href='#'>Services</a>
          <a href='#'>Use Cases</a>
          <a href='#'>Pricing</a>
          <a href='#'>Blog</a>
        </nav>

        <div className='social-icons'>
          <a href='#'><i className='fab fa-linkedin'></i></a>
          <a href='#'><i className='fab fa-facebook'></i></a>
          <a href='#'><i className='fab fa-twitter'></i></a>
        </div>

        <div className='footer-legal'>
          <p>© 2023 Positivus. All Rights Reserved. <a href='#'>Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
