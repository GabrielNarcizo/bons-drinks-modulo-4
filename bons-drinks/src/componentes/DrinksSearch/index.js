import React, { useState } from 'react';
import DrinksPop from '../DrinksPop'

const DrinksSearch = () => {
    const [value, setValue] = useState("");

    return (
        <div>
            <input type='text' onChange={(event) => setValue(event.target.value)}/>
            <button onClick={async () =>{
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
                console.log(response.drinks)
            }}>Buscar</button>
            <DrinksPop />
        </div>
    )
}

export default DrinksSearch
