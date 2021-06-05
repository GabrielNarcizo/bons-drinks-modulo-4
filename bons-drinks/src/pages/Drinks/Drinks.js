import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import DrinksPop from '../../componentes/DrinksPop/DrinksPop'
import DrinksSearch from '../../componentes/DrinksSearch/DrinksSearch'
import NavBar from '../../componentes/Nav/NavBar'
import { Container } from './Drinks.style'

const Drinks = () => {
    return (
        <div>
            <NavBar />
            <BrowserRouter>
                <Container>
                    <h1>Drinks</h1>
                    <Link to="/drinks/drinksPop"><p>Drinks populares</p></Link>
                    <Link to="/drinks/buscarDinks"><p>Buscar Drinks</p></Link>
                </Container>
                <Switch> 
                    <Route exact path="/drinks/drinkspop" component={DrinksPop} />  
                    <Route exact path="/drinks/buscarDinks" component={DrinksSearch} />  
                </Switch> 
            </BrowserRouter>
        </div>
    )
}

export default Drinks
