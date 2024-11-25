import React from 'react'
import './Team.scss'
import Group from './Group'

function Team() {
    return (
        <div className='team-container'>
            
            <div className='team-header'>

                <span className='team-title'>Quem Constrói o Projeto</span>

                <span className='team-description'>Conheça quem faz o projeto acontecer!</span>

            </div>

            <div className='team-field'>

                <Group title="Coordenação" description="Os coordenadores que tomam as principais decisões para guiar o projeto durante os anos."/>
                <Group title="Professores" description="Responsáveis por lecionar e garantir a qualidade das aulas, guiando para um lugar na universidade."/>
                <Group title="Secretaria" description="Uma das principais estruturas do projeto, que mantém o espaço em pleno funcionamento durante o dia e noite."/>
                <Group title="Assembleia" description="Composta por diversos pilares da comunidade, tomam as decisões que impactam o projeto de forma mais ampla e impactante."/>
                <Group title="Alunos" description="Nosso principal foco e objetivo, o projeto só pode existir pela presença dos nossos quase 400 alunos anuais."/>
                <Group title="Comunidade" description="Contando com moradores da região, artistas, ex-alunos, músicos, mães, pais e muito mais! Nossa comunidade auxilia o projeto sempre que possível."/>

            </div>

        </div>
    )
}

export default Team