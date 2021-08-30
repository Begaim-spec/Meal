import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom'

const Ingredients = () => {
    const [meal, setMeal] = useState({})
    const [ingredients, setIngredients] = useState([])
    const params = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(({data}) => {
                const obj = data.meals[0]
                const products = Array(20).fill(1).reduce((acc, elem, idx) =>{
                    if (obj[`strIngredient${idx + 1}`]) {
                        return ([...acc, obj[`strIngredient${idx + 1}`]])
                    }
                        return acc
                }, [])
                setIngredients(products)
                setMeal(obj)
            })
    }, [params.id])
    return (
        <div className='container'>
                <div className='main-box'>
                    <Link to='/'>Go back</Link>
                   <div className="ing-box">
                       <img src={meal.strMealThumb} alt=""/>
                   </div>
                   <div className="ing-box description">
                       <div className='ing-title'>{meal.strMeal}</div>
                       <div className='instructions'>{meal.strInstructions}</div>
                   </div>
                </div>
                <div className='row'>
                    {ingredients.map((elem) =>(
                        <div key={elem} className="col-3">
                                 <div className="ing-box">
                                     <Link to={`/ingredients/${elem.strMeal}`}> {elem}
                                         <img src={`https://www.themealdb.com/images/ingredients/${elem}.png`} alt=""/>
                                     </Link>
                                 </div>
                        </div>
                ))}
                 </div>
            </div>
    )
};

export default Ingredients;