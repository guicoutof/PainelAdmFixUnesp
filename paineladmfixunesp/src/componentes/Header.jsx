import React from 'react'
import './Header.css'

import Logo from '../assets/imgs/logo.png'

export default () =>
	<div id="header">
		<img className="logo" src={Logo} alt="Logo"></img>
		<h1 className="titulo">Painel administrativo Fix.Unesp</h1>
		<button className="botao">sair</button>
	</div>