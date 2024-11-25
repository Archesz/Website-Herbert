import React from 'react'
import './Servicos.scss'
import Servico from './Servico'

import teachers from '../../assets/illustration/profs.png'
import prova from '../../assets/illustration/redacao.png'
import study from '../../assets/illustration/study.png'
import help from '../../assets/illustration/help.png'
import resist from '../../assets/illustration/resist.png'
import friends from '../../assets/illustration/friends.png'
function Servicos() {
    return (
        <div className='servicos-container'>
            
            <div className='servicos-header'>

                <span className='servicos-title'>O que oferecemos</span>

                <span className='servicos-description'>
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </span>

            </div>

            <div className='servicos-field'>

                <Servico title="Aulas Presenciais" style="white" image={teachers}/>
                <Servico title="Redação e Correções" style="red" image={prova}/>
                <Servico title="Simulados" style="black" image={study}/>
                <Servico title="Plantão de Dúvidas" style="white" image={help}/>
                <Servico title="Educação Crítica" style="red" image={resist}/>
                <Servico title="Boa Convivência" style="black" image={friends}/>


            </div>

        </div>
    )
}

export default Servicos