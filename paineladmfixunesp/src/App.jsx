import React from 'react';
import './App.css';

import Painel from './componentes/Painel'
import Menu from './componentes/Menu'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Login from './componentes/Login'

export default function App() {
    // return <div className="app">
    //     <Header />
    //     <div className="conteudo">
    //         <Menu />
    //         <Painel />
    //     </div>
    //     <Footer />
    // </div>
    return <Login></Login>
}
