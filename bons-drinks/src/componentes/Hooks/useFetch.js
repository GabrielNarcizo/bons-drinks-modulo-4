import { useEffect, useState } from 'react'

const useFetch = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() =>{
        const getDrinks = async () => {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const data = await response.json()
            setDrinks(data.drinks)
        }
        getDrinks()
    },[])
    return drinks
}

export default useFetch;
