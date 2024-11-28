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

            {/* Modal */}
            {modalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="modal-title">{props.title}</span>
                        <p className="modal-description">{props.fullDescription}</p>
                        <button className="close-modal" onClick={toggleModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Servico;
