import React, {useEffect, useState} from 'react';
import axios from 'axios'
import MealsList from "../components/MealsList/MealsList";
import Search from "../views/Search/Search";


const Meals = () => {
    const [meals, setMeals] = useState([])


    useEffect(() => {
        axios ('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, [])
    return (
        <div>
            <Search meals={meals}/>
           <MealsList meals={meals}/>
        </div>
    );
};

export default Meals;