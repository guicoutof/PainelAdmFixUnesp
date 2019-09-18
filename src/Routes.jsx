import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from "./services/auth";
import Login from './componentes/Login/Login'
import Componentes from './componentes/Componentes'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/signup" component={SignUp} /> */}
        <PrivateRoute path="/home" component={Componentes} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );


export default Routes;

// https://blog.rocketseat.com.br/reactjs-autenticacao/