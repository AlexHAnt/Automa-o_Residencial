import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Control from './../pages/Control'
// import Home from './../pages/Home'





export default () =>
    <Switch>
        <Route exact path='/' component={Control} />
        {/* <Route path='/novoservico' component={NewService} /> */}
        <Redirect from='*' to='/' />
    </Switch>