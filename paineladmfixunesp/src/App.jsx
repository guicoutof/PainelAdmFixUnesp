import React from 'react';
import './App.css';

import Painel from './componentes/Painel/Painel'
import Menu from './componentes/Menu/Menu'
import Header from './componentes/Header'
import Footer from './componentes/Footer'

export default function App(){
    return <div className="app">
                <Header />
                <div className="conteudo">
                    <Menu />
                    <Painel />
                </div>
                <Footer />
            </div>
}
