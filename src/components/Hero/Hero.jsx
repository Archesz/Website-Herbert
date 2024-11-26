import React from 'react'
import './Hero.scss'
import heroimg from '../../assets/images/hero-image.png'

function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-infos'>
                <span className='hero-title'>Conquistando Espaços: Um dos caminhos para o seu futuro!</span>
                <span className='hero-subtitle'>Nosso cursinho oferece uma preparação completa e acessível, com professores experientes, materiais de alta qualidade e apoio dedicado para ajudar você a conquistar a tão sonhada vaga na universidade.</span>
                <button className='hero-btn'>Fazer Inscrição</button>

                {/* Detalhes flutuantes */}
                <div className='floating-shape shape1'></div>
                <div className='floating-shape shape2'></div>
                <div className='floating-shape shape3'></div>
                <div className='floating-shape shape4'></div>
                <div className='floating-shape shape5'></div>
            </div>

            <div className='hero-image'>
                <img src={heroimg} alt='Hero Image' />
            </div>
        </div>
    )
}

export default Hero
