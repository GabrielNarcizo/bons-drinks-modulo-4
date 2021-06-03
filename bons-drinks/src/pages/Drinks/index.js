import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import DrinksPop from '../../componentes/DrinksPop'
import DrinksSearch from '../../componentes/DrinksSearch'
import NavBar from '../../componentes/Nav'

const Drinks = () => {
    return (
        <div>
            <NavBar />
            <BrowserRouter>
                <div>
                    <h1>Drinks</h1>
                    <Link to="/drinks/drinksPop">Drinks populares</Link>
                    <Link to="/drinks/buscarDinks">Buscar Drinks</Link>
                </div>
                <Switch> 
                    <Route exact path="/drinks/drinkspop" component={DrinksPop} />  
                    <Route exact path="/drinks/buscarDinks" component={DrinksSearch} />  
                </Switch> 
            </BrowserRouter>
        </div>
    )
}

export default Drinks
