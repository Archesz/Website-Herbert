import React from 'react'
import './Servicos.scss'

function Servico(props) {
    return (
        <div className={`servico ${props.style}`}>
            
            <div>
                <span className='servico-title'>{props.title}</span>
                
                <span className='servico-descript'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>

                <button className='btn-more'>
                    <span className="btn-text">Ler Mais</span> 
                </button>
            </div>            

            <img src={props.image} alt="" className='servico-image'/>

        </div>
    )
}

export default Servico