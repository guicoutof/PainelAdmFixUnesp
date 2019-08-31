export const auth = {
  logado: false,
  login: '',
  senha: '',

  verificarLogin() {
    if (this.login === 'a' && this.senha === '123')
      this.logado = true;
    else
      this.logado = false
  },

  setLogin(txt) {
    this.login = txt;
  },

  setSenha(txt) {
    this.senha = txt;
  }
}