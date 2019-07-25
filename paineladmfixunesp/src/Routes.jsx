import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'

import Login from './componentes/Login/Login'
import Componentes from './componentes/Componentes'

export default props => (
    <HashRouter>
        <Route path='/login' component={Login} />
        <Route path='/home' component={Componentes} />
        <Redirect from='*' to='/home' />
    </HashRouter>
)