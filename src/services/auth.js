// export const auth = {
//   logado: false,
//   login: '',
//   senha: '',

//   verificarLogin() {
//     if (this.login === 'a' && this.senha === '123')
//       this.logado = true;
//     else
//       this.logado = false
//   },

//   setLogin(txt) {
//     this.login = txt;
//   },

//   setSenha(txt) {
//     this.senha = txt;
//   }
// }

export const TOKEN_KEY = "@airbnb-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
  

};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  window.location.reload();
};