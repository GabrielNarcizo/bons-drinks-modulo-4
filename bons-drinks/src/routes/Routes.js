import React from 'react'
import { Route, Switch } from 'react-router'
import AboutUs from '../pages/AboutUs/AboutUs'
import Contact from '../pages/Contact/Contact'
import Drinks from '../pages/Drinks/Drinks'
import Home from '../pages/Home'
import OurTime from '../pages/OurTime/OurTime'

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
        <Route path="/nossotime">
            <OurTime />
        </Route>
        <Route path="/contato">
            <Contact />
        </Route>
    </Switch>
    )
}

export default Routes
