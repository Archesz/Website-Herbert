import React from 'react'
import './Banner.scss'
import ilustration from '../../assets/illustration/Illustration.png'

function Banner() {
    return (
        <div className='banner-container'>
            
            <div className='banner-left'>
                <span className='banner-title'>
                    Vamos juntos conquistar a Universidade!
                </span>

                <span className='banner-descript'>
                    Conte com nossa metodologia comprovada, suporte dedicado e materiais exclusivos para se preparar de forma eficaz. Vamos caminhar juntos rumo à sua aprovação
                </span>

                <button className='banner-btn'>Fazer Inscrição!</button>

            </div>

            <div className='banner-right'>
                <img src={ilustration} alt="" className='banner-img'/>
            </div>

        </div>
    )
}

export default Banner