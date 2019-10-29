import React from 'react';
import './App.css';

import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Routes from './Routes.jsx'


export default function App() {
    return <div className="app">
        {/* <Header /> */}
        <Routes />
        {/* <Footer /> */}
    </div>
}
