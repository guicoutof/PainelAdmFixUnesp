import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button'

export default function Login(props) {
  return <div className="login">
    <Paper className="loginPaper">
      <h1 className="titulo">Login</h1>
      <div className="textfield">
        <AccountCircle className="icon" />
        <TextField id="email" label="Email" type="email" margin="normal" onChange={props.handleEmail} />
      </div>
      <div className="textfield">
        <Lock className="icon" />
        <TextField id="senha" label="Senha" type="password" margin="normal" autoComplete="current-password" onChange={props.handlePassword} />
      </div>

      <Link to="/home" className="link">
        <Button variant="contained" color="secondary" className="btn"
          onClick={props.verificaLogin}>
          Entrar
                  </Button>
      </Link>


    </Paper>
  </div>
}
