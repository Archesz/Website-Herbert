import React from 'react'
import './Estrutura.scss'
function Estrutura() {
  return (
    <div className='estrutura-container'>

      <div className='estrutura-header'>

        <span className='estrutura-title'>Nossa Estrutura</span>

        <span className='estrutura-description'>Entenda como nossa estrutura funciona para ofecer o suporte para que seu ano seja mais completo!</span>

      </div>

      <div className='estrutura-field'>

        <div className='estrutura-card'>
          <span className='estrutura-name'>Corpo Docente</span>
          <span className='estrutura-descript'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </span>

          <button className='estrutura-btn'>Ler Mais</button>
        </div>

        <div className='estrutura-card'>
          <span className='estrutura-name'>Estrutura Física</span>
          <span className='estrutura-descript'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </span>

          <button className='estrutura-btn'>Ler Mais</button>
        </div>

        <div className='estrutura-card'>
          <span className='estrutura-name'>Tecnologia</span>
          <span className='estrutura-descript'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </span>

          <button className='estrutura-btn'>Ler Mais</button>
        </div>

      </div>

    </div>
  )
}

export default Estrutura