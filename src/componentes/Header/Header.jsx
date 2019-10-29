import React from 'react'
import Logo from '../../assets/imgs/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

import { isAuthenticated,logout } from "../../services/auth";


export default () =>
	<div id="header">
		<Link to="/home"><img className="logo" src={Logo} alt="Logo"/></Link>
		<h1 className="titulo">Painel Administrativo Fix Unesp</h1>
			{isAuthenticated() ? 
				<button className="sair" onClick={()=>logout()}>Sair </button>
			:<div></div>}
	</div>