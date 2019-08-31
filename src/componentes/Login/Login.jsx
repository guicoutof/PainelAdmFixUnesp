import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { auth } from '../auth'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }

  }
  render() {

    return (

      <div className="login">
        <Paper className="loginPaper">
          <h1 className="titulo">Login</h1>
          <div className="textfield">
            <AccountCircle className="icon" />
            <TextField id="email" label="Email" type="email" margin="normal" onChange={(event) => { auth.setLogin(event.target.value) }} />
          </div>
          <div className="textfield">
            <Lock className="icon" />
            <TextField id="senha" label="Senha" type="password" margin="normal" autoComplete="current-password" onChange={(event) => { auth.setSenha(event.target.value) }} />
          </div>

          <Link to={this.state.url} className="link">
            <Button id="botaoLogin" variant="contained" color="secondary" className="btn"
              onClick={() => {
                auth.verificarLogin();
                console.log(auth);
                if (auth.logado === true) {
                  this.setState({ url: '/home' }, () => {
                    document.getElementById("botaoLogin").click()
                  });
                }
              }}>
              Entrar
            </Button>
          </Link>


        </Paper>
      </div>
    );
  }
}
