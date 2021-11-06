import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom'
import MealsList from "../MealsList/MealsList";
import Layout from "../Layout";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState([])
    const params = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.id}`)
            .then(({data}) => console.log(setIngredients(data.meals)))
    }, [params.id])
    return (
        <Layout>
            <div className='main-box container'>
                <img src={`https://www.themealdb.com/images/ingredients/${params.strMealThumb}.png`} alt=""/>
                <div className='row'>
                    <MealsList meals={ingredients}/>
                    <Link to='/'>Go back</Link>
                </div>
            </div>
        </Layout>
    )
};
export default Ingredients;