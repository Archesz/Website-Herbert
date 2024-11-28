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
                No Herbert, auxiliamos da melhor forma possível para garantir sua aprovação no vestibular. 
                </span>

            </div>

            <div className='servicos-field'>

                <Servico 
                title="Aulas Presenciais" 
                style="white" 
                image={teachers}
                description="Aulas dinâmicas com professores dedicados e em formação. Universitários, formados e atuantes no movimento de educação popular."
                fullDescription="Nossas aulas presenciais proporcionam um ambiente de aprendizado colaborativo, com professores experientes preparados para os desafios do vestibular."
                />

                <Servico 
                title="Redações" 
                style="white" 
                image={prova}
                description="Rotina de redações com correções e feedbacks individuais. Diversos temas e formatos para auxiliar em todas as provas!"
                fullDescription="Nossas aulas presenciais proporcionam um ambiente de aprendizado colaborativo, com professores experientes preparados para os desafios do vestibular."
                />

                <Servico 
                title="Simulados" 
                style="black" 
                image={help}
                description="Simulados realistas para preparação efetiva nos principais vestibulares e vestibulinhos."
                fullDescription="Nossas aulas presenciais proporcionam um ambiente de aprendizado colaborativo, com professores experientes preparados para os desafios do vestibular."
                />

                <Servico 
                title="Plantões de Dúvidas" 
                style="black" 
                image={study}
                description="Apoio continuo aos fins de semana e em horários personalizados para resolução de exercícios e provas."
                fullDescription="Nossas aulas presenciais proporcionam um ambiente de aprendizado colaborativo, com professores experientes preparados para os desafios do vestibular."
                />

                <Servico 
                title="Educação Crítica" 
                style="white" 
                image={resist}
                description="Formação para além do conteúdo acadêmico, educação crítica e social que vão além dos muros da Universidade."
                fullDescription="Nossas aulas presenciais proporcionam um ambiente de aprendizado colaborativo, com professores experientes preparados para os desafios do vestibular."
                />

                <Servico 
                title="Convivência" 
                style="white" 
                image={friends}
                description="Ambiente acolhedor e colaboração para convivência, permitindo que nossos estudantes se sintam confortável no nosso espaço."
                fullDescription="Nossas aulas presenciais proporcionam um ambiente de aprendizado colaborativo, com professores experientes preparados para os desafios do vestibular."
                />

            </div>

        </div>
    )
}

export default Servicos