import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from './componentes/Login/Login'
import Componentes from './componentes/Componentes'

export default props => (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path='/home' component={Componentes} />
        <Redirect from='*' to='/' />
    </Switch>
    </BrowserRouter>
)