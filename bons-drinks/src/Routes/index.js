import React from 'react'
import { Route, Switch } from 'react-router'
import AboutUs from '../pages/AboutUs'
import Drinks from '../pages/Drinks'
import Home from '../pages/Home'

const Routes = () => {
    return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/drinks">
            <Drinks />
        </Route>
        <Route path="/sobrenos">
            <AboutUs />
        </Route>
    </Switch>
    )
}

export default Routes
