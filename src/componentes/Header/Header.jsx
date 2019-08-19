import React from 'react'
// import { BrowserRouter, Link } from 'react-router-dom'
import Logo from '../../assets/imgs/logo.png'
import './Header.css'


export default () =>
	<div id="header">
		<img className="logo" src={Logo} alt="Logo"></img>
		<h1 className="titulo">Painel administrativo Fix.Unesp</h1>
			{/* <Link to="/"> */}
				<button className="sair">sair</button>
			{/* </Link> */}
	</div>