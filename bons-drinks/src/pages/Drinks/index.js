import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import DrinksPop from '../../componentes/DrinksPop'
import NavBar from '../../componentes/Nav'

const Drinks = () => {
    return (
        <div>
            <NavBar />
            <BrowserRouter>
                <h1>Drinks</h1>
                <Link to="/drinks/drinksPop">Drinks populares</Link>
                <Switch> 
                    <Route exact path="/drinks/drinkspop" component={DrinksPop} />  
                </Switch> 
            </BrowserRouter>
        </div>
    )
}

export default Drinks
