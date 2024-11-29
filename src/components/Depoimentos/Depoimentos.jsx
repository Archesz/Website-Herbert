import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';  // Importe o hook
import './Depoimentos.scss';

const depoimentosData = [
  {
    text: "Graças ao curso, consegui entender conceitos complexos e melhorar muito meu desempenho em Matemática. Fui aprovado na minha primeira tentativa no vestibular!",
    author: "Camila Ferreira",
    role: "Estudante de Engenharia - Unicamp",
  },
  {
    text: "As aulas de redação foram essenciais para minha aprovação. A atenção personalizada fez toda a diferença!",
    author: "Lucas Mendes",
    role: "Estudante de Direito - USP",
  },
  {
    text: "O ambiente colaborativo e os plantões de dúvidas me ajudaram a manter a motivação alta. Recomendo para qualquer estudante que busca excelência!",
    author: "Natália Rodrigues",
    role: "Estudante de Medicina - USP",
  },
  {
    text: "Os simulados realistas e a preparação intensiva me deram a confiança necessária para o ENEM. Sou muito grato à equipe de professores!",
    author: "Renan Silva",
    role: "Estudante de Economia - UFRJ",
  },
  {
    text: "Além do conteúdo, o curso me ensinou disciplina e organização. Fui aprovado em duas universidades federais!",
    author: "Juliana Castro",
    role: "Estudante de Física - UNESP",
  },
];

function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDepoimento = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentosData.length);
  };

  const prevDepoimento = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? depoimentosData.length - 1 : prevIndex - 1
    );
  };

  // Configuração dos gestos de arraste
  const handlers = useSwipeable({
    onSwipedLeft: nextDepoimento,  // Arraste para a esquerda para ir ao próximo depoimento
    onSwipedRight: prevDepoimento, // Arraste para a direita para ir ao depoimento anterior
    preventDefaultTouchmoveEvent: true, // Evita comportamentos padrão
    trackMouse: true, // Permite também o uso do mouse
  });

  return (
    <div className='depoimentos-container' {...handlers}> {/* Adicione os handlers aqui */}
      <div className='depoimentos-header'>
        <span className='depoimentos-title'>Depoimentos</span>
        <span className='depoimentos-description'>
          O Projeto é feito de histórias e pessoas, todas guardadas para lembrar nossa jornada até aqui.
        </span>
      </div>

      <div className='depoimentos-field'>
        <div className='depoimento-card'>
          <p className='depoimento-text'>
            "{depoimentosData[currentIndex].text}"
          </p>
          <div className='depoimento-author'>
            <span className='author-name'>{depoimentosData[currentIndex].author}</span>
            <span className='author-role'>{depoimentosData[currentIndex].role}</span>
          </div>
        </div>
      </div>

      <div className='navigation'>
        <span className='arrow' onClick={prevDepoimento}>&#8592;</span>
        <div className='dots'>
          {depoimentosData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <span className='arrow' onClick={nextDepoimento}>&#8594;</span>
      </div>
    </div>
  );
}

export default Depoimentos;