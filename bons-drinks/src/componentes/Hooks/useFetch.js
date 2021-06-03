import { useEffect, useState } from 'react'

const useFetch = () => {
    const [value, setValue] = useState();

    useEffect(() =>{
        const searchDrinks = async () => {
            const response = await fetch(`https:/www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
            const data = await response.json()
            setValue(data.drinks)
        }
        searchDrinks()
    },[value])
    return value;
}

export default useFetch;
