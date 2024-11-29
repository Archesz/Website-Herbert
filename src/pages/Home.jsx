import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Parceiros from '../components/Parceiros/Parceiros'
import Servicos from '../components/Servicos/Servicos'
import Banner from '../components/Banner/Banner'
import Estrutura from '../components/Estrutura/Estrutura'
import Funcionamento from '../components/Funcionamento/Funcionamento'
import Team from '../components/Team/Team'
import Depoimentos from '../components/Depoimentos/Depoimentos'
import Footer from '../components/Footer/Footer'

function Home() {
    return (
        <div className='home-container'>


            <Hero />

            <Parceiros />

            <Servicos />

            <Banner />

            <Estrutura />

            <Funcionamento />

            <Team />

            <Depoimentos />

            <Footer />

        </div>
    )
}

export default Home