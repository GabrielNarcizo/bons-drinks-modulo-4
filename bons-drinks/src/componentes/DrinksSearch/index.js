import React, { useState } from 'react'

const DrinksSearch = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <select type={'text'} name="nome" onChange={(event) => setValue(event.target.value)}>
                <option value="Alcoolico">Alcoolico</option>
                <option value="Categoria">Categoria</option>
                <option value="Copo">Copo</option>
            </select>
            <button onClick={async (event) =>{
                const response = await fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?a=${event.target.value}`)
                const data = await response.json()
                setValue(data)
            }}>Buscar</button>
            
        </div>
    )
}

export default DrinksSearch
