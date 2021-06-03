import React, { useEffect, useState } from 'react';
import Footer from '../Footer'
import { Container, ContainerWrapper, DrinksCard } from './style';

const DrinksPop = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() =>{
        const getDrinks = async () => {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=cocktail');
            const data = await response.json()
            setDrinks(data.drinks)
        }
        getDrinks()
    },[])

    return (
        <div>
            <Container >
                <ContainerWrapper>
                    {drinks.slice(0, 10).map((items, key) => (
                    <DrinksCard key={key}>
                    <img src={items.strDrinkThumb} alt="Imagem da Bebida" />   
                    <p>Nome: {items.strDrink}</p>
                    </DrinksCard>
                    ))}
                </ContainerWrapper>
            </Container>
            <Footer />
        </div>
    )
}

export default DrinksPop;
