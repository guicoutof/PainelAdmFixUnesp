import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <div id="login" className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-60 p-b-30">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-33">
              Login
					  </span>

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" name="email" placeholder="Email" />
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>

            </div>

            <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
              <input className="input100" type="password" name="pass" placeholder="Senha" />
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>

            <div className="container-login100-form-btn m-t-20">
              <button className="login100-form-btn">
              <BrowserRouter>
                <Link to="/home">Confirmar</Link>
              </BrowserRouter>
              </button>
            </div>

            <div className="text-center p-t-45 p-b-4">
              <span className="txt1">
                Esqueceu &nbsp;
						      </span>

              <a href="#login" className="txt2 hov1">
                Email / Senha ?
						      </a>
            </div>

            <div className="text-center">
              <span className="txt1">
                Ainda não tem conta? &nbsp;
						      </span>

              <a href="#login" className="txt2 hov1">
                Cadastre-se
					    	</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
