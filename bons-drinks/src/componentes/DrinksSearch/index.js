import React, { useState } from 'react';
import DrinksPop from '../DrinksPop'
import { Container } from './style'

const DrinksSearch = (props) => {
    const [value, setValue] = useState("");

    return (
        <Container>
            <input type={'text'} onChange={(event) => setValue(event.target.value)}/>
            <button onClick={async () =>{
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
                const data = response.json()
                setValue(data)
            }}>Buscar</button>
        </Container>
    )
}

export default DrinksSearch
