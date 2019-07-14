import React from 'react'
import './Login.css'

export default props =>
  <div class="box-parent-login">
    <div class="well bg-white box-login">
      <h1 class="ls-login-logo">Login</h1>
      <form role="form">
        <fieldset>
          <div class="form-group ls-login-user">
            <label for="userLogin">Usuário</label>
            <input class="form-control ls-login-bg-user input-lg" id="userLogin" type="text" aria-label="Usuário" placeholder="Usuário" />
          </div>
          <div class="form-group ls-login-password">
            <label for="userPassword">Senha</label>
            <input class="form-control ls-login-bg-password input-lg" id="userPassword" type="password" aria-label="Senha" placeholder="Senha" />
          </div>

          <a href="#" class="ls-login-forgot">Esqueci minha senha</a>

          <input type="submit" value="Entrar" class="btn btn-primary btn-lg btn-block" />
          <p class="txt-center ls-login-signup">Não possui um usuário?
					      <a href="#">Cadastre-se agora</a>
          </p>
        </fieldset>
      </form>
    </div>
  </div>