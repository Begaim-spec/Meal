import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom'
import IngredientsList from "../../components/IngredintsList/IngredientsList";
import Layout from "../Layout";

const MealDetails = () => {
        const [meal, setMeal] = useState({})
        const [youTube, setYoutube] = useState('')
        const {id} = useParams()


        useEffect( () => {
            const fetchData = async () => {
                const {data: {meals}} = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                setMeal(meals[0])
                const string = meals[0].strYoutube
                setYoutube(string.slice(string.indexOf('v=') + 2, string.length))
            }
            fetchData()
        }, [id])
        const ingredients = Array(20).fill(1).reduce((acc, elem, idx) => {
            const ingredients = meal[`strIngredient${idx + 1}`]
            return ingredients ? [...acc, ingredients] : acc
        }, [id])


        return (
            <Layout>
                <div className='main-box container '>
                    <Link to='/'>Go back</Link>
                    <div className="ing-box">
                        <img src={meal.strMealThumb} alt="" className='meal-img'/>
                    </div>
                    <div className="ing-box">
                        <iframe width='560' height='315' src={`https://www.youtube.com/embed/${youTube}`}
                                title='YouTube video player' frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
                                allowFullScreen>m
                        </iframe>
                    </div>
                    <div className="ing-box description">
                        <div className='ing-title'>{meal.strMeal}</div>
                        <div>{meal.strInstructions}</div>
                    </div>
                </div>
                <IngredientsList ingredients={ingredients}/>
            </Layout>
        )
    }
;

export default MealDetails;