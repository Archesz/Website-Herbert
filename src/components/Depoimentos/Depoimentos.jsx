import React from 'react';
import './Depoimentos.scss'; // Importa o arquivo SCSS

function Depoimentos() {
  return (
    <div className='depoimentos-container'>
      <div className='depoimentos-header'>
        <span className='depoimentos-title'>Depoimentos</span>
        <span className='depoimentos-description'>
          O Projeto é feito de histórias e de pessoas, e todas são guardadas para que possamos lembrar nossa estrada até aqui.
        </span>
      </div>

      <div className='depoimentos-field'>
        <div className='depoimento-card'>
          <p className='depoimento-text'>
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
          </p>
          <div className='depoimento-author'>
            <span className='author-name'>John Smith</span>
            <span className='author-role'>Marketing Director at XYZ Corp</span>
          </div>
        </div>

        {/* Adicione mais depoimentos aqui */}
      </div>

      <div className='navigation'>
        <span className='arrow'>&#8592;</span>
        <div className='dots'>
          <span className='dot active'></span>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </div>
        <span className='arrow'>&#8594;</span>
      </div>
    </div>
  );
}

export default Depoimentos;
