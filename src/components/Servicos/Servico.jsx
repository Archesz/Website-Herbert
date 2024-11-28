import React, { useState } from 'react';
import './Servicos.scss';

function Servico(props) {
    // Estado para controlar a visibilidade do modal
    const [modalOpen, setModalOpen] = useState(false);

    // Função para alternar o modal
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div className={`servico ${props.style}`}>
            <div>
                <span className='servico-title'>{props.title}</span>
                
                <span className='servico-descript'>{props.description}</span>

            </div>            

            <img src={props.image} alt="" className='servico-image'/>

        </div>
    );
}

export default Servico;
