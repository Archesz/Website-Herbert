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
            Com aproximadamente 50 professores, 6 coordenadores, 3 secretários e uma assembleia, os participantes do projeto se colocam a disposição para ajudar os nossos estudantes em todos os problemas cábiveis. 
          </span>
        </div>

        <div className='estrutura-card'>
          <span className='estrutura-name'>Estrutura Física</span>
          <span className='estrutura-descript'>
            Salas de Aula, Computadores, Internet, Cozinha, Sala de convivência, Secretaria e área de estudos externa! Use nosso espaço da forma que se sentir melhor para seus estudos!
          </span>
        </div>

        <div className='estrutura-card'>
          <span className='estrutura-name'>Tecnologia</span>
          <span className='estrutura-descript'>
            Disponibilizamos de Internet, computadores, impressoras, projetores, equipe de TI e muito mais para auxiliar os estudantes com quaisquer necessidades tecnologicas e semelhantes.
          </span>
        </div>

      </div>

    </div>
  )
}

export default Estrutura