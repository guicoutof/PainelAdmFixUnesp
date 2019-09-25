import React ,{ Component } from 'react';
import { withRouter } from 'react-router-dom'
import './Login.css'
import { login } from "../../services/auth";
import api from "../../services/api";

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/home");
        window.location.reload();
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };


  render() {

    return (
      <div className="login" onSubmit={this.handleSignUp}>
        <Paper className="loginPaper">
          <h1 className="titulo">Login</h1>
          <div className="alert alert-info">
                    Username: guilherme@couto.com.br<br />
                    Password: 123456
                </div>
          {this.state.error && <p>{this.state.error}</p>}
          <div className="textfield">
            <AccountCircle className="icon" />
            <TextField id="email" label="Email" type="email" margin="normal" onChange={e => this.setState({ email: e.target.value })} />
          </div>
          <div className="textfield">
            <Lock className="icon" />
            <TextField id="senha" label="Senha" type="password" margin="normal" autoComplete="current-password" onChange={e => this.setState({ password: e.target.value })} />
          </div>
            <Button onClick={this.handleSignIn} id="botaoLogin" variant="contained" color="secondary" className="btn">
              Entrar
            </Button>

        </Paper>
      </div>
    );
  }
}

export default withRouter(Login);