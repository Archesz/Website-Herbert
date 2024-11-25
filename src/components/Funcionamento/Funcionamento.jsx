import React from 'react'
import "./Funcionamento.scss"
import Card from './Card'

function Funcionamento() {
    return (
        <div className='funcionamento-container'>

            <div className='funcionamento-header'>

                <span className='funcionamento-title'>Como Funcionamos</span>

                <span className='funcionamento-description'>Nosso passo a passo para ajudar você à ocupar espaços!</span>

            </div>

            <div className='funcionamento-field'>

                <Card title="Aulas" content="Nossas aulas são cuidadosamente estruturadas para oferecer uma compreensão profunda e sólida dos conteúdos, combinando teoria e prática de forma equilibrada. Durante cada sessão, os alunos têm acesso a explicações claras e didáticas, com exemplos concretos e aplicações práticas que facilitam o entendimento dos conceitos. Utilizamos metodologias ativas de ensino, como estudos de caso, resolução de problemas e atividades em grupo, para garantir que o aprendizado seja dinâmico e participativo. Além disso, personalizamos o ritmo das aulas conforme o perfil de cada turma, identificando e ajustando os pontos de dificuldade. Isso proporciona uma aprendizagem mais eficiente e adaptada às necessidades individuais dos alunos, contribuindo para um melhor desempenho acadêmico." number="01"/>
                <Card title="Plantões" content="Os plantões oferecem suporte individualizado para esclarecer dúvidas específicas. São momentos dedicados a revisar conteúdos, resolver exercícios e garantir que os alunos compreendam plenamente o material, promovendo a autonomia no aprendizado." number="02"/>
                <Card title="Simulados" content="Os simulados são aplicados periodicamente para preparar os alunos para exames reais. Eles simulam o ambiente das provas, ajudando a desenvolver estratégias de tempo, identificar pontos fortes e áreas de melhoria, e acompanhar o progresso acadêmico." number="03"/>
                <Card title="Redações" content="Oferecemos suporte completo na elaboração de redações, desde a estrutura até a coesão e coerência textual. Nossas correções são detalhadas, focando em aspectos gramaticais e argumentativos para que o aluno aprimore suas habilidades de escrita." number="04"/>
                <Card title="Orientação Pedagógica e Universitária" content="A orientação pedagógica e universitária visa guiar os alunos em suas trajetórias acadêmicas e profissionais. Auxiliamos na escolha de cursos, planejamento de estudos e desenvolvimento de habilidades necessárias para ingressar no ensino superior com confiança." number="05"/>
                <Card title="Discussões Sociais e Críticas" content="Promovemos debates sobre temas sociais e críticos relevantes, estimulando o pensamento analítico e a argumentação. Essas discussões ampliam a visão de mundo dos alunos, incentivando uma postura reflexiva e engajada em relação à sociedade." number="06"/>

            </div>

        </div>
    )
}

export default Funcionamento